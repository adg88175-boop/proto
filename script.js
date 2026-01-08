// Scroll-based animation triggers
function onScrollAnimate() {
    // Problem Statement
    const problem = document.getElementById('problem');
    if (problem && isVisible(problem)) {
        problem.classList.add('visible');
    }

    // Solution Cards
    document.querySelectorAll('.card').forEach(card => {
        if (isVisible(card)) {
            card.classList.add('visible');
        }
    });

    // How It Works Steps
    document.querySelectorAll('.step').forEach(step => {
        if (isVisible(step)) {
            step.classList.add('visible');
        }
    });

    // Dashboard Recommendations
    document.querySelectorAll('.recommendation-card').forEach(card => {
        if (isVisible(card)) {
            card.classList.add('visible');
        }
    });

    // Integration Cards
    document.querySelectorAll('.integration-card').forEach(card => {
        if (isVisible(card)) {
            card.classList.add('visible');
        }
    });

    // Footer
    const footer = document.querySelector('footer');
    if (footer && isVisible(footer)) {
        footer.classList.add('visible');
    }
}

function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight - 60 &&
        rect.bottom > 60
    );
}

window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('load', onScrollAnimate);

// Button hover animation (slide + glow)
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('hovered');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hovered');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
