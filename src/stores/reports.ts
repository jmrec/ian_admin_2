import { defineStore } from 'pinia';
import type { Report } from '../../types';
import { useSupabase } from '@/composables/useSupabase';

const { supabase } = useSupabase();

export const useReportsStore = defineStore('reports', {
    state: () => ({
        allReports: [] as Report[],
        isLoading: false,
        error: null as string | null,
    }),

    actions: {
        async fetchAllReports() {
            this.isLoading = true;
            try {
                const { data, error } = await supabase
                    .from('reports')
                    .select(`
                *,
                feeder_id,
                barangays ( name ),
                report_images ( image_url )
            `);

                if (error) throw error;

                this.allReports = (data || []).map((r: any) => ({
                    ...r,
                    feeder: r.feeder_id,
                    barangay: r.barangays?.name || 'Unknown Barangay',
                    status: r.status?.toUpperCase() === 'PENDING' ? 'PENDING' :
                        (r.status ? r.status.charAt(0).toUpperCase() + r.status.slice(1).toLowerCase() : 'Unknown'),
                    volume: 1,
                    images: (r.report_images || []).map((img: any) => {
                        if (img.image_url.startsWith('http')) return img.image_url;
                        const { data: publicUrlData } = supabase.storage
                            .from('report_images')
                            .getPublicUrl(img.image_url);
                        return publicUrlData.publicUrl;
                    })
                }));
            } catch (err: any) {
                this.error = err.message;
            } finally {
                this.isLoading = false;
            }
        }
    },

    getters: {
        pendingReports: (state) => state.allReports.filter(r => r.status === 'PENDING'),

        feederAggregates: (state) => {
            const aggregates: Record<number, { count: number; status: string }> = {};
            for (let i = 1; i <= 14; i++) {
                const count = state.allReports.filter(r => r.feeder === i && r.status === 'PENDING').length;
                aggregates[i] = {
                    count,
                    status: count > 0 ? 'PENDING' : 'Completed'
                };
            }
            return aggregates;
        }
    }
});