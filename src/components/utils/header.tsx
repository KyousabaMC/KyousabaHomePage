import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookOpenIcon,
  LockClosedIcon,
  ScaleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import styles from '@/styles/components/utils/Header.module.css';
import Frame from './frame';
import Link from 'next/link';
import Image from 'next/image';

const terms = [
  { name: '利用規約', description: 'みんなが気持ちよくプレイするために遵守頂く規約です。', href: '#', icon: ScaleIcon },
  { name: '運営規約', description: '運営として活動する際に遵守頂く規約です。', href: '#', icon: LockClosedIcon }
]

const links = [
    { name: '公式Wiki', description: '今日鯖についての様々な情報がまとめられています。', href: 'https://docs.kyousaba.net/', icon: BookOpenIcon },
    { name: '処罰リスト', description: '過去に発行された全ての処罰が確認できます。', href: 'https://banlist.kyousaba.net/', icon: ScaleIcon }
  ]

function classNames(...classes: (string | number | boolean | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
  }

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
        <div className={styles.spacerTop}></div>

        <div className={styles.header}>
            <Frame />
            <header className={styles.headerChild}> { /* className='bg-zinc-800' */}
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-12" aria-label="Global" style={{ height: "5rem" }}>
                    <div className="flex p-2 -m-3">
                        <Link href="/" className="-m-1 p-1">
                            <span className="sr-only">今日鯖</span>
                            <img className={styles.logo} src="/img/logo/long.png" alt="" />
                        </Link>
                        </div>
                        <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                            style={{ right: "1.2rem", top: "3rem", position: "fixed" }}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">メニューを開く</span>
                            <Bars3Icon className="size-6" aria-hidden="true" />
                        </button>
                        </div>

                        { /* 今日鯖について */}
                        <div className={styles.links}>
                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Link href="/#about" className="font-normal leading-6">
                                    今日鯖について
                                </Link>

                                <Link href="/news" className="font-normal leading-6">
                                    ニュース
                                </Link>

                                { /* ルール/規約 */}
                                <Popover className="relative">
                                    <Popover.Button className="flex items-center gap-x-1 font-normal leading-6">
                                    ルール/規約
                                    <ChevronDownIcon className="size-5 flex-none text-gray-400" aria-hidden="true" />
                                    </Popover.Button>

                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                        <div className={styles.dropdownMenu}>
                                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 bg-zinc-100">
                                                <div className="p-4">
                                                    {terms.map((item) => (
                                                    <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-zinc-200"
                                                    >
                                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-zinc-100 group-hover:bg-zinc-100">
                                                            <item.icon className="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                        </div>
                                                        <div className={styles.dropdownMenuLink}>
                                                            <div className="flex-auto">
                                                                <Link href={item.href} className="block font-semibold">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                                </Link>
                                                                <p className="mt-1">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                </div>
                                            </Popover.Panel>
                                        </div>
                                    </Transition>
                                </Popover>

                                <Link href="/staffs" className="font-normal leading-6">
                                    運営紹介
                                </Link>

                                <Popover className="relative">
                                    <Popover.Button className="flex items-center gap-x-1 font-normal leading-6">
                                    外部リンク
                                    <ChevronDownIcon className="size-5 flex-none text-gray-400" aria-hidden="true" />
                                    </Popover.Button>

                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 bg-zinc-100">
                                            <div className="p-4">
                                            {links.map((item) => (
                                                <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-zinc-200"
                                                >
                                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg group-hover:bg-zinc-100">
                                                        <item.icon className="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                    </div>
                                                    <div className={styles.dropdownMenuLink}>
                                                        <div className="flex-auto">
                                                            <Link href={item.href} className="block font-semibold">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                            </Link>
                                                            <p className="mt-1">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </Popover.Group>
                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-10" />
                            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link href="/" className="m-1.5 p-1.5 text-white-900">
                                    <span className="sr-only">今日鯖</span>
                                    <Image
                                        className="h-8 w-auto"
                                        src="/img/logo/long.png"
                                        alt=""
                                    />
                                </Link>
                                <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white-900"
                                onClick={() => setMobileMenuOpen(false)}
                                >
                                <span className="sr-only">閉じる</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-zinc-500/10">
                                <div className="space-y-2 py-6">
                                
                                    <Link
                                    href="/#about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-zinc-800"
                                    >
                                    今日鯖について
                                    </Link>

                                    <Link
                                    href="/news"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-zinc-800"
                                    >
                                    ニュース
                                    </Link>

                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-zinc-800">
                                                    ルール/規約
                                                    <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...terms].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200 hover:bg-zinc-800"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>

                                    <Link
                                    href="/staffs"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-zinc-800"
                                    >
                                    運営紹介
                                    </Link>

                                    <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-200 hover:bg-zinc-800">
                                                外部リンク
                                                <ChevronDownIcon
                                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...links].map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200 hover:bg-zinc-800"
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                    </Disclosure>
                                </div>
                                <div className="py-6">
                                    <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 hover:bg-zinc-800"
                                    >
                                    Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </Dialog.Panel>
                    </Dialog>
            </header>
        </div>
    </div>
  )
}