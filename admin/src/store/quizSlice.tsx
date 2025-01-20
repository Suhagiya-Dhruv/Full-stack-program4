import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface QuizState {
    quiz: [{
        name: string
        startTime: Date,
        duration: number,
        category: string
    }] | []
}

const initialState: QuizState = {
    quiz: [],
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizList: (state, action) => {
            state.quiz = action.payload;
        }
    },
})

export const { setQuizList } = quizSlice.actions

export const getQuizList = () => async (dispatch: any) => {
    try {
        const response = await axios.get("http://localhost:5500/api/v1/quiz/list", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')!}`
            }
        });
        if (response.data.status) {
            dispatch(setQuizList(response.data.data))
        }
    } catch (err: any) {
        return { status: true, message: err.response.data.message }
    }
}

export const createQuiz = (data: { name: string, startTime: Date, duration: number, category: string }) => async (dispatch: any) => {
    try {
        const response = await axios.post("http://localhost:5500/api/v1/quiz/create", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')!}`
            }
        });
        if (response.data.status) {
            dispatch(getQuizList())
        }
    } catch (err: any) {
        return { status: true, message: err.response.data.message }
    }
}

export default quizSlice.reducer