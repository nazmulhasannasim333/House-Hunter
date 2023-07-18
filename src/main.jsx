import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
)
