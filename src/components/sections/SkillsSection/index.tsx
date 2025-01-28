import React from 'react';
import styles from './styles.module.css';

interface SkillItem {
    icon: string; // Icon (e.g., emoji or image URL)
    label: string; // Skill name
}

interface SkillsSectionProps {
    title: string;
    items: SkillItem[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, items }) => {
    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.skillsTitle}>{title}</h2>
            <div className={styles.skillsContainer}>
                {items.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <span className={styles.skillIcon}>{skill.icon}</span>
                        <p>{skill.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
