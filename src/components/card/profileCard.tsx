import styles from "@/styles/components/card/ProfileCard.module.css"
import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode, MouseEvent } from "react"

interface ProfileProps {
    name: string,
    msg: string,
    labelText: string,
    labelInfo: string,
    labelImg: string,
    imageColor: string,
    discordId: string,
    iconUrl: string,
    description: string,
    sns: {[key: string]: string}[]
}

export const ProfileCard = (props: ProfileProps) => {

    // 右クリック禁止
    function handleContextMenu(evt: MouseEvent<HTMLDivElement>) {
        evt.preventDefault();
    }

    let labelComponent: ReactNode
    let labelImage: ReactNode
    if (props.labelImg != "") {
        labelImage = (
            <Image width={0} height={0} className="labelImg" src={props.labelImg} onContextMenu={handleContextMenu} alt="" />
        )
    }

    if (props.labelText != "") {
        labelComponent = (
            <div className={styles.label}>
                <div onContextMenu={handleContextMenu}>
                    {labelImage}
                    <Tooltip
                        label={props.labelInfo}
                    >
                        <span className={styles.labelText}><span>{props.labelText}</span></span>
                    </Tooltip>
                </div>
            </div>
        )
    }

    let snsSites: ReactNode[] = []
    props.sns.forEach((item) => {
        const serviceName = Object.keys(item)[0];
        const serviceUrl = item[serviceName];

        switch (serviceName) {
            case "discord": {
                snsSites.push(
                    <p className={styles.snsInfo}>
                        <Tooltip label={"@"+serviceUrl}>
                            <Image width={0} height={0} src={"/img/snsLogo/"+serviceName+".svg"} alt="" />
                        </Tooltip>
                    </p>
                )
                break
            }
            default: {
                snsSites.push(
                    <p className={styles.snsInfo}>
                        <a href={serviceUrl}>
                            <Image width={0} height={0} src={"/img/snsLogo/"+serviceName+".svg"} alt="" />
                        </a>
                    </p>
                )
                break
            }
        }
    });

    return (
        <div className={styles.profileCard}>
            <span className={styles.imageColor} style={{backgroundColor: props.imageColor}}><p></p></span>
            
            {labelComponent}

            <div className={styles.msg}><div><p>{props.msg}</p></div></div>
            <span className={styles.userIcon}>
                <Image width={128} height={0} src={props.iconUrl} onContextMenu={handleContextMenu} alt="" />
                <div className={styles.iconProtect}><Image width={0} height={0} src="/img/dummy.jpeg" alt="" onContextMenu={handleContextMenu} /></div>
            </span>
            <h2 className={styles.userName}>{props.name}</h2>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.snsSites}>
                {snsSites}
            </div>
        </div>
    )

}