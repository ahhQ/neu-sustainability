document.addEventListener("DOMContentLoaded", () => {
    const shapes = document.querySelectorAll('.graphics img');
    const containerWidth = document.querySelector('.graphics').offsetWidth;
    const containerHeight = document.querySelector('.graphics').offsetHeight;

    shapes.forEach((shape, index) => {
        let directionX = (Math.random() < 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.1);
        let directionY = (Math.random() < 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.1);
        let posX = Math.random() * (containerWidth - shape.width);
        let posY = Math.random() * (containerHeight - shape.height);
        let scale = 1;
        let scaleDirection = 0.0015;

        function animateShape() {
            posX += directionX;
            posY += directionY;

            if (posX > containerWidth - shape.width || posX < 0) {
                directionX *= -1;
            }
            if (posY > containerHeight - shape.height || posY < 0) {
                directionY *= -1;
            }

            // Size animation
            scale += scaleDirection;
            if (scale > 1.5 || scale < 0.5) {
                scaleDirection *= -1;
            }

            shape.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;

            requestAnimationFrame(animateShape);
        }

        animateShape();
    });

    const reflectText = document.querySelector('.reflect-text');
    const reflection = document.createElement('div');
    reflection.className = 'reflection';
    reflection.innerText = reflectText.innerText;
    reflectText.appendChild(reflection);
});