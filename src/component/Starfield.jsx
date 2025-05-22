import { useEffect, useRef } from "react"

function Starfield() {
    const canvasRef = useRef(null)
    const stars = useRef([])

    const STAR_COUNT = 150

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        for(let i = 0; i < STAR_COUNT; i++) {
            stars.current.push(createStar(width, height))
        }

        function createStar(w, h) {
            return {
                x: Math.random() * w - w / 2,
                y: Math.random() * h - h / 2,
                z: Math.random() * w,
            }
        }

        function animate() {
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, width, height)

            for(let i = 0; i < STAR_COUNT; i++){
                let star = stars.current[i]
                star.z -= .2

                if(star.z <= 0) {
                    star.z = width
                }

                let k = 128.0 / star.z
                let x = star.x * k + width / 2
                let y = star.y * k + height / 2

                if(x < 0 || x >= width || y < 0 || y >= height) {
                    stars.current[i] = createStar(width, height)
                    continue
                }

                let size = (1 - star.z / width) * 3
                ctx.beginPath()
                ctx.arc(x, y, size, 0, Math.PI * 2)
                ctx.fillStyle = 'white'
                ctx.fill()
            }

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                width: '100%',
                height: '100%'
            }}
        >
        </canvas>
    )
}

export default Starfield