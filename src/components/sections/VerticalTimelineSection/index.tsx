import React from 'react';
import styles from './styles.module.css';

interface TimelineItem {
    title: string;  // Company/School Name
    subtitle: string;  // Designation/Course (New Field)
    date: string;
    description: string | string[];  // Handle both string & array formats
    icon?: string;  // Optional Icon
}

interface VerticalTimelineProps {
    title: string;
    items: TimelineItem[];
}

const VerticalTimelineSection: React.FC<VerticalTimelineProps> = ({ title, items }) => {
    return (
        <section className={styles.timelineSection}>
            <h2 className={styles.timelineTitle}>{title}</h2>
            <div className={styles.timelineContainer}>
                {items.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <h5>
                            {item.icon && <span className={styles.timelineIcon}>{item.icon}</span>}
                            {item.title}
                        </h5>
                        <p className={styles.subtitle}>{item.subtitle} | {item.date}</p> {/* Updated */}
                        <br />
                        {Array.isArray(item.description) ? (
                            <ul>
                                {item.description.map((point, i) => (
                                    <li key={i}>{point.trim()}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{item.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VerticalTimelineSection;
