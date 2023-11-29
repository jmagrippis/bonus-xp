import {ImageResponse} from '@vercel/og'

export async function GET({request}: {request: Request}) {
	const sansFont = await fetch(
		new URL('/fonts/Raleway-Medium.ttf', request.url),
	).then((res) => res.arrayBuffer())

	const mascotUrl = new URL('/android-chrome-512x512.png', request.url)

	const html = {
		type: 'div',
		props: {
			children: {
				type: 'div',
				props: {
					children: [
						{
							type: 'img',
							props: {
								width: 320,
								height: 320,
								src: mascotUrl.toString(),
							},
						},
						{
							type: 'div',
							props: {
								children: 'Bonus XP',
								style: {
									fontSize: 96,
									backgroundImage:
										'linear-gradient(to bottom, #059669, #a7f3d0)',
									backgroundClip: 'text',
									color: 'transparent',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
								},
							},
						},
					],
					style: {
						backgroundImage: 'linear-gradient(to bottom, #1a171c, #0d0b0f)',
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						padding: 48,
						borderRadius: 16,
					},
				},
			},
			style: {
				backgroundImage: 'linear-gradient(to top, #059669, #a7f3d0)',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 16,
				flexDirection: 'column',
			},
		},
	}

	return new ImageResponse(html, {
		width: 1200,
		height: 630,
		emoji: 'noto',
		fonts: [
			{
				name: 'Raleway',
				data: sansFont,
				style: 'normal',
				weight: 500,
			},
		],
	})
}
