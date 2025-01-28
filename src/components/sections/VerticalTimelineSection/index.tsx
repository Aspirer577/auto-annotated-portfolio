import React from 'react';
import styles from './styles.module.css';

interface TimelineItem {
    title: string;
    company: string;
    date: string;
    description: string;
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
                        <h3>{item.title}</h3>
                        <p className={styles.subtitle}>{item.company} | {item.date}</p>
                        <ul>
                            {Array.isArray(item.description) ? (
                                item.description.map((point, i) => (
                                    <li key={i}>{point.trim()}</li>
                                ))
                            ) : (
                                <li>{item.description}</li>
                            )}
                        </ul>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default VerticalTimelineSection;
