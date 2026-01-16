import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useSupabase } from '@/composables/useSupabase';

export const useReportsStore = defineStore('reports', () => {
    const { supabase } = useSupabase();
    const allReports = ref<any[]>([]);
    const isLoading = ref(false);

    async function fetchReports(force = false) {
        if (allReports.value.length > 0 && !force) return;

        isLoading.value = true;
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

            allReports.value = (data || []).map((r: any) => ({
                ...r,
                feeder: r.feeder_id,
                barangay: r.barangays ? r.barangays.name : 'Unknown Barangay',
                status: r.status ? r.status.toUpperCase() : 'PENDING',
                images: (r.report_images || []).map((img: any) => img.image_url)
            }));

            console.log("Reports fetched:", allReports.value.length);
            console.log("Sample report:", allReports.value[0]);
        } catch (err) {
            console.error("Store Fetch Error:", err);
        } finally {
            isLoading.value = false;
        }
    }

    const pendingReports = computed(() =>
        allReports.value.filter(r => r.status === 'PENDING')
    );

    return {
        allReports,
        isLoading,
        fetchReports,
        pendingReports
    };
});