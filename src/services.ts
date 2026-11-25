import type { AuthResponse, LoginRequest, MentorList, RegisterRequest, Mentor, MentorshipRequest, MentorshipResponse } from "./types";
import {api} from './api'


export async function loginRequest(data: LoginRequest): Promise<AuthResponse>{
    const res = await api.post<AuthResponse>('/api/auth/login', data);
    return res.data
}

export async function registerRequest(data: RegisterRequest): Promise<void>{
    await api.post('/api/auth/register', data);
}

export async function getMentors(page: number): Promise<MentorList>{
    const res = await api.get<MentorList>('/api/auth/mentors', {params: {page, size: 5}});
    return res.data;
}

export async function getMentor(id: number): Promise<Mentor>{
    const res = await api.get<Mentor>(`/api/mentors${id}`);
    return res.data;
}

export async function mentorship(id: number, data: MentorshipRequest): Promise<MentorshipResponse>{
    const res = await api.post<MentorshipResponse>(`/api/mentors/${id}/requests`, data);
    return res.data;
}

