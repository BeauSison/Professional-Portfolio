/* Portfolio Page Styles */

.page-header {
    padding: 120px 0 60px;
    background: linear-gradient(135deg, var(--color-steel-dark) 0%, var(--color-leather-dark) 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.02) 10px,
            rgba(255, 255, 255, 0.02) 20px
        );
}

.page-title {
    font-size: 4rem;
    color: var(--color-white);
    margin-bottom: var(--spacing-sm);
    position: relative;
    z-index: 1;
}

.page-subtitle {
    font-size: 1.25rem;
    color: var(--color-silver);
    position: relative;
    z-index: 1;
}

/* Portfolio Notice */
.portfolio-notice-section {
    padding: var(--spacing-lg) 0;
    background: var(--color-black);
}

.notice-card {
    background: var(--color-steel-dark);
    border: 2px solid var(--color-bronze);
    padding: var(--spacing-lg);
    border-radius: 4px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.notice-icon {
    font-size: 4rem;
    margin-bottom: var(--spacing-sm);
}

.notice-card h2 {
    color: var(--color-bronze);
    font-size: 2rem;
    margin-bottom: var(--spacing-sm);
}

.notice-card p {
    color: var(--color-off-white);
    line-height: 1.8;
    font-size: 1.1rem;
}

/* Portfolio Preview */
.portfolio-preview-section {
    padding: var(--spacing-xl) 0;
    background: var(--color-black);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
}

.portfolio-card {
    background: var(--color-steel-dark);
    border: 1px solid var(--color-steel);
    border-radius: 4px;
    overflow: hidden;
    transition: all var(--transition-normal);
}

.portfolio-card:hover {
    transform: translateY(-10px);
    border-color: var(--color-bronze);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.portfolio-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: var(--color-steel);
}

.placeholder-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--color-steel) 0%, var(--color-steel-light) 100%);
    color: var(--color-silver);
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.portfolio-content {
    padding: var(--spacing-md);
}

.portfolio-content h3 {
    color: var(--color-white);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
}

.portfolio-content > p {
    color: var(--color-off-white);
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
}

.portfolio-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: var(--spacing-sm);
}

.portfolio-tags span {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--color-steel);
    color: var(--color-bronze);
    font-size: 0.85rem;
    border-radius: 20px;
    border: 1px solid var(--color-steel-light);
}

.portfolio-links {
    margin-top: var(--spacing-sm);
}

.portfolio-link {
    color: var(--color-bronze);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    transition: all var(--transition-fast);
}

.portfolio-link:hover {
    color: var(--color-leather-light);
    padding-left: 0.5rem;
}

/* Categories Section */
.categories-section {
    padding: var(--spacing-xl) 0;
    background: var(--color-steel-dark);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
}

.category-card {
    background: var(--color-black);
    border: 1px solid var(--color-steel);
    padding: var(--spacing-lg);
    border-radius: 4px;
    text-align: center;
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--color-bronze), var(--color-leather-light));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-normal);
}

.category-card:hover::before {
    transform: scaleX(1);
}

.category-card:hover {
    transform: translateY(-10px);
    border-color: var(--color-bronze);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.category-card h3 {
    color: var(--color-bronze);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
}

.category-card p {
    color: var(--color-silver);
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
}

.category-count {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--color-steel);
    color: var(--color-bronze);
    font-size: 0.9rem;
    border-radius: 20px;
    font-weight: bold;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .categories-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .categories-grid {
        grid-template-columns: 1fr;
    }
}