export interface LoginRequest{ email: string; password: string;}
export interface RegisterRequest{name: string; email: string; password: string;}
export interface AuthResponse{ token: string;}
export interface Mentor{
    id: number;
    name: string;
    specialty: string;
    modality: string;
    availableSlots: string;
    description: string;
}
export interface MentorList{
    items: Mentor[];
    page: number;
    size: number;
    totalItems: number;
    totalPages: number;
}

export interface MentorshipRequest{
    topic: string;
}

export type Status = "PENDING" | "CANCELLED"

export interface MentorshipResponse{
    id: number;
    resourceId: number;
    resourceName: string;
    topic: string;
    status: Status;
}
