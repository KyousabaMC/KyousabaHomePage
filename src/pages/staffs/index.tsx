import { ProfileCard } from "@/components/card/profileCard"
import Header from "@/components/utils/header"
import { PageTitle } from "@/components/utils/pageTitle"

import styles from "@/styles/pages/Staffs.module.css"

interface Profiles {
    [key: string]: {
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
}

const staffProfiles: Profiles = {
    "kuripasanda": {
        msg: "Owner",
        labelText: "",
        labelInfo: "",
        labelImg: "",
        imageColor: "rgb(144, 214, 40)",
        discordId: "kuripasanda",
        iconUrl: "/img/staffIcons/kuripasanda.png",
        description: "意外とすごい人",
        sns: [
            {"twitter": "https://twitter.com/kuripachanda"},
            {"github": "https://github.com/kuripasanda"},
            {"discord": "kuripasanda"}
        ]
    },
    "kuripa": {
        msg: "Owner",
        labelText: "",
        labelInfo: "",
        labelImg: "",
        imageColor: "rgb(144, 214, 40)",
        discordId: "kuripasanda",
        iconUrl: "/img/staffIcons/kuripasanda.png",
        description: "意外とすごい人",
        sns: [
            {"twitter": "https://twitter.com/kuripachanda"},
            {"github": "https://github.com/kuripasanda"},
            {"discord": "kuripasanda"}
        ]
    },
    "kuripa2": {
        msg: "Owner",
        labelText: "",
        labelInfo: "",
        labelImg: "",
        imageColor: "rgb(144, 214, 40)",
        discordId: "kuripasanda",
        iconUrl: "/img/staffIcons/kuripasanda.png",
        description: "意外とすごい人",
        sns: [
            {"twitter": "https://twitter.com/kuripachanda"},
            {"github": "https://github.com/kuripasanda"},
            {"discord": "kuripasanda"}
        ]
    },
    "kuripa3": {
        msg: "Owner",
        labelText: "",
        labelInfo: "",
        labelImg: "",
        imageColor: "rgb(144, 214, 40)",
        discordId: "kuripasanda",
        iconUrl: "/img/staffIcons/kuripasanda.png",
        description: "意外とすごい人",
        sns: [
            {"twitter": "https://twitter.com/kuripachanda"},
            {"github": "https://github.com/kuripasanda"},
            {"discord": "kuripasanda"}
        ]
    },
    "kuripa4": {
        msg: "Owner",
        labelText: "",
        labelInfo: "",
        labelImg: "",
        imageColor: "rgb(144, 214, 40)",
        discordId: "kuripasanda",
        iconUrl: "/img/staffIcons/kuripasanda.png",
        description: "意外とすごい人",
        sns: [
            {"twitter": "https://twitter.com/kuripachanda"},
            {"github": "https://github.com/kuripasanda"},
            {"discord": "kuripasanda"}
        ]
    }
}

export default function Staffs() {

    return (
        <div>
            <Header />

            <div className="content">
            
                <PageTitle title="運営紹介" />
                
                <div className={styles.profileSection}>
                    <div className={styles.profiles}>
                        <div>
                            {Object.keys(staffProfiles).map(key => (
                                <ProfileCard
                                        name={key}
                                        msg={staffProfiles[key].msg}
                                        labelText={staffProfiles[key].labelText}
                                        labelInfo={staffProfiles[key].labelInfo}
                                        labelImg={staffProfiles[key].labelImg}
                                        imageColor={staffProfiles[key].imageColor}
                                        discordId={staffProfiles[key].discordId}
                                        description={staffProfiles[key].description}
                                        iconUrl={staffProfiles[key].iconUrl}
                                        sns={staffProfiles[key].sns}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}