import Image from 'next/image'
export default function Header() {
	return (
		<header className='flex items-center justify-between pb-4'>
			<Image
				src='/images/box.png'
				alt='logo'
				width={75}
				height={75}
			/>
			<p>Заказы 1.0</p>
			<Image
				src='/images/user.png'
				alt='user'
				width={75}
				height={75}
			/>
		</header>
	)
}
