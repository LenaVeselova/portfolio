import React from 'react';
import styles from './Slogan.module.css';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <span>Рассматриваю варианты удаленной работы</span>
                <button>Я здесь</button>
            </div>
        </div>
    );
}

export default Slogan;
