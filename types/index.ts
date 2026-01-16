export interface Report {
    id: string;
    user_id: string;
    outage_time: string;
    cause: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    created_at: string;
    feeder_id: number;
    barangay: string;
    report_images: { image_url: string }[];
    feeder: number;
    images: string[];
}

export interface BarangaySummary {
    barangay: string;
    count: number;
    mostCommonCause?: string;
    status?: string;
    coordinates?: { latitude: number; longitude: number };
}