import { ref, computed } from 'vue';
import { useReportsStore } from '../stores/reports';

export function useReportsView() {
    const store = useReportsStore();

    const currentView = ref<'feeders' | 'barangays' | 'individuals'>('feeders');
    const selectedFeederId = ref<number | null>(null);
    const selectedBarangay = ref<string | null>(null);

    const searchQuery = ref('');
    const statusFilter = ref('all');
    const sortBy = ref('id');
    const currentPage = ref(1);
    const itemsPerPage = 12;

    const currentDisplayData = computed(() => {
        if (currentView.value === 'feeders') return [];

        if (currentView.value === 'barangays') {
            const groups: Record<string, any> = {};
            const reports = store.pendingReports.filter(r => r.feeder === selectedFeederId.value);

            reports.forEach(r => {
                if (!groups[r.barangay]) {
                    groups[r.barangay] = { id: r.barangay, barangay: r.barangay, count: 0, causes: {} as any, coords: null };
                }
                groups[r.barangay].count++;
                groups[r.barangay].causes[r.cause || 'Undetermined'] = (groups[r.barangay].causes[r.cause || 'Undetermined'] || 0) + 1;
                if (r.latitude && !groups[r.barangay].coords) groups[r.barangay].coords = `${r.latitude.toFixed(4)}, ${r.longitude.toFixed(4)}`;
            });

            return Object.values(groups);
        }

        return store.pendingReports.filter(r => r.barangay === selectedBarangay.value);
    });

    const filteredData = computed(() => {
        let data = [...currentDisplayData.value];

        if (searchQuery.value) {
            const q = searchQuery.value.toLowerCase();
            data = data.filter(item =>
                (item.barangay?.toLowerCase().includes(q)) ||
                (item.description?.toLowerCase().includes(q)) ||
                (item.id?.toString().includes(q))
            );
        }

        data.sort((a, b) => {
            if (sortBy.value === 'volume-high') return (b.count || 0) - (a.count || 0);
            return a.id > b.id ? 1 : -1;
        });

        return data;
    });

    const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        return filteredData.value.slice(start, start + itemsPerPage);
    });

    const openFeeder = (id: number) => {
        selectedFeederId.value = id;
        currentView.value = 'barangays';
        currentPage.value = 1;
    };

    const openBarangay = (name: string) => {
        selectedBarangay.value = name;
        currentView.value = 'individuals';
        currentPage.value = 1;
    };

    const goBack = () => {
        if (currentView.value === 'individuals') currentView.value = 'barangays';
        else if (currentView.value === 'barangays') currentView.value = 'feeders';
    };

    return {
        currentView,
        searchQuery,
        sortBy,
        currentPage,
        paginatedData,
        filteredData,
        openFeeder,
        openBarangay,
        goBack,
        store
    };
}