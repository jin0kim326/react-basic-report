import React from 'react';
import styles from './ColorComponent.module.css';
import { COLOR } from './Question1';

export default function ColorComponent() {
    return (
        <div className={`${styles.box} /** 🔥 */`} >
            <p className={styles.font}> 이 박스의 색을 바꾸세용</p>
        </div>
    );
}

