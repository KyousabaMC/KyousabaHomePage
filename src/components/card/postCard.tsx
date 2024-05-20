import Image from 'next/image'
import styles from "@/styles/components/card/PostCard.module.css"
import { Tooltip } from "@chakra-ui/react";
import { ReactNode, MouseEvent } from "react"

interface PostProps {
    title: string;
    image: string;
    date: string;
    modified: string;
    author: string;
    categories: string[];
}

export const PostCard = (props: PostProps) => {

    // 右クリック禁止
    function handleContextMenu(evt: MouseEvent<HTMLDivElement>) {
        evt.preventDefault();
    }

    const date = new Date(props.date);

    return (
        <>
            <div className={styles.postCard}>
                <img className={styles.image} src={props.image} alt='' />
                <div className={styles.textArea}>
                    <p className={styles.category}>{props.categories}</p>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.date}>{date.toLocaleString("ja-JP", {year: "numeric", month: "numeric", day: "numeric"})}</p>
                </div>
                <img className={styles.authorIcon} src={`https://minotar.net/helm/${props.author}`} alt='' />
            </div>
        </>
    );

}