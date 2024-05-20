import { useEffect, useState } from 'react';
import useSWR from 'swr'
import Head from 'next/head'
import Header from '@/components/utils/header'
import { PageTitle } from '@/components/utils/pageTitle';
import { PostCard } from '@/components/card/postCard';
import styles from '@/styles/pages/News.module.css';
import Link from 'next/link';

export default function News() {
    
    interface WPPost {
        id: number;
        date: string;
        modified: string;
        slug: string;
        status: string;
        type: string;
        link: string;
        categories: number[];
        author: number;
        title: {
          rendered: string;
        };
        content: {
          rendered: string;
        };
        excerpt: {
          rendered: string;
        };
        featured_media: number;
    }
    interface WPCategory {
        id: number;
        count: number;
        description: string;
        name: string;
        slug: string;
        parent: number;
    }
    interface WPMedia {
        id: number;
        slug: string;
        link: string;
    }
    interface WPUser {
        id: number;
        name: string;
        slug: string;
        description: string;
        avatar_urls: {size: number, url: string};
    }
    interface ErrorResponse {
        message: string;
    }

    

    const API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/`

    const postsFetcher = async (url: string): Promise<WPPost[]> => {
        const response = await fetch(url);
        if (!response.ok) {
          const errorData: ErrorResponse = await response.json();
          throw new Error(errorData.message);
        }
        return response.json();
    };
    const categoriesFetcher = async (url: string): Promise<WPCategory[]> => {
        const response = await fetch(url);
        if (!response.ok) {
          const errorData: ErrorResponse = await response.json();
          throw new Error(errorData.message);
        }
        return response.json();
    };
    const usersFetcher = async (url: string): Promise<WPUser[]> => {
        const response = await fetch(url);
        if (!response.ok) {
          const errorData: ErrorResponse = await response.json();
          throw new Error(errorData.message);
        }
        return response.json();
    };
    

    // ニュースのカテゴリを検索する
    const { data: categories, error: categoriesError, isLoading: isCategoriesLoading } = useSWR<WPCategory[], Error>(
        `${API_URL}categories`,
        categoriesFetcher);

    // ニュースカテゴリIDを取得
    const newsCategoryId = categories?.find(category => category.slug === "news")?.id;

    // newsCategoryIdが取得できたら、そのIDを使って投稿を取得
    const { data: posts, error: postsError, isLoading: isPostsLoading } = useSWR<WPPost[], Error>(
        newsCategoryId ? `${API_URL}posts?categories=${newsCategoryId}` : null,
        postsFetcher
    );

    // 投稿のアイキャッチ画像を取得
    const [mediaData, setMediaData] = useState(Array<WPMedia>);
    const [mediaLoading, setMediaLoading] = useState(true);
    const [mediaError, setMediaError] = useState(null);

    // ユーザー(投稿者)を取得
    const [authors, setAuthors] = useState(Array<WPUser>);
    const [authorsLoading, setAuthorsLoading] = useState(true);
    const [authorsError, setAuthorsError] = useState(null);

    useEffect(() => {
        if (posts) {

            // 投稿のアイキャッチ画像を取得
            const mediaIds = posts.map(post => post.featured_media).filter(id => id != null);
            if (mediaIds.length > 0) {
                Promise.all(mediaIds.map(id => fetch(`${API_URL}media/${id}`).then(res => res.json())))
                    .then(mediaResults => {
                        const mediaMap = mediaResults.reduce((acc, media: WPMedia) => {
                            acc[media.id] = media;
                            return acc;
                        }, {});
                        setMediaData(mediaMap);
                        setMediaLoading(false);
                    })
                    .catch(error => {
                        setMediaError(error);
                        setMediaLoading(false);
                    });
            } else {
                setMediaLoading(false);
            }

            // ユーザー(投稿者)を取得
            const userIds = posts.map(post => post.author).filter(id => id != null);
            if (userIds.length > 0) {
                Promise.all(userIds.map(id => fetch(`${API_URL}users/${id}`).then(res => res.json())))
                    .then(userResults => {
                        const userMap = userResults.reduce((acc, user: WPUser) => {
                            acc[user.id] = user;
                            return acc;
                        }, {});
                        setAuthors(userMap);
                        setAuthorsLoading(false);
                    })
                    .catch(error => {
                        setAuthorsError(error);
                        setAuthorsLoading(false);
                    });
            } else {
                setAuthorsLoading(false);
            }
        }
    }, [posts]);

    return (
        <div>
            <Head>
                <title>ニュース - 今日鯖</title>
            </Head>

            <Header />

            <div className='content'>
                <PageTitle title='きょう鯖 News' />

                <div className={styles.newsSection}>
                    <div>
                        {posts && posts.map((post) => {
                            const media = mediaData[post.featured_media];

                            var postCategories: Array<string> = []
                            post.categories.map(id => {
                                postCategories.push(
                                    categories?.filter(category => category.slug != "news")
                                        .find(category => category.id == id)?.name || ""
                            );
                            });

                            const author = authors[post.author]
                        

                            return (
                                <div className={styles.news}>
                                    <div>
                                        <Link href={`/news/${post.id}`}>
                                            <PostCard
                                                title={post.title.rendered}
                                                image={media?.link || ""}
                                                date={post.date}
                                                modified={post.modified}
                                                author={author?.name || ""}
                                                categories={postCategories}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}