// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project Data Loading (example)
const loadProjects = async () => {
    try {
        // In real implementation, this would fetch from a JSON file or API
        const projects = [
            {
                id: 1,
                title: "Predictive Customer Analytics",
                description: "ML model predicting customer churn with 94% accuracy",
                technologies: ["Python", "Scikit-learn", "XGBoost", "Tableau"],
                link: "#"
            },
            {
                id: 2,
                title: "NLP Sentiment Analysis",
                description: "Real-time sentiment analysis of social media data",
                technologies: ["TensorFlow", "BERT", "FastAPI", "Docker"],
                link: "#"
            }
        ];
        
        const grid = document.querySelector('.projects-grid');
        if (grid) {
            projects.forEach(project => {
                const card = createProjectCard(project);
                grid.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error loading projects:', error);
    }
};

const createProjectCard = (project) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-image">
            <span>Project ${project.id}</span>
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
            <a href="${project.link}" class="btn btn-primary">View Details</a>
        </div>
    `;
    
    return card;
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});