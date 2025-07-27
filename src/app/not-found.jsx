'use client'
import { useRouter } from 'next/navigation'
export default function NotFound() {
	const router = useRouter()
	const handleBackClick = () => router.back()
	return (
		<div className='flex items-center justify-center h-screen flex-col'>
			<h1 className='text-2xl font-bold'>Упс...Ошибка 404</h1>
			<p className='text-2xl font-bold'>Не смогли найти страницу</p>
			<p>
				<button
					className='text-2xl font-bold cursor-pointer hover:text-black/35'
					onClick={handleBackClick}
					type='button'
					name='backButton'
				>
					Назад
				</button>
			</p>
		</div>
	)
}
