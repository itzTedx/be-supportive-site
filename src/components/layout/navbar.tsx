"use client";

import Link from "next/link";

import { ListIcon, PhoneCallIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { Logo } from "@/assets/logo";

import { NAV_ITEMS } from "@/config/navigation";

export function Navbar() {
	return (
		<header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
			<div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/">
					<Logo />
				</Link>

				<nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
					{NAV_ITEMS.map((item) => (
						<Button
							className="px-3"
							key={item.href}
							nativeButton={false}
							render={<Link href={item.href} />}
							variant="ghost"
						>
							{item.label}
						</Button>
					))}
				</nav>

				<div className="flex hidden items-center gap-2 md:block">
					<Button variant="outline">
						<PhoneCallIcon /> +971 56 789 0123
					</Button>
					<Button nativeButton={false} render={<Link href="/contact" />}>
						Get Consultation
					</Button>
				</div>

				<div className="md:hidden">
					<Drawer position="left">
						<DrawerTrigger render={<Button variant="outline" />}>
							<ListIcon />
						</DrawerTrigger>
						<DrawerPopup showCloseButton variant="inset">
							<DrawerHeader>
								<DrawerTitle>Navigation</DrawerTitle>
							</DrawerHeader>
							<DrawerPanel>
								<nav className="-mx-[calc(--spacing(3)-1px)] flex flex-col gap-0.5">
									{NAV_ITEMS.map((item) => (
										<DrawerClose
											key={item.href}
											nativeButton={false}
											render={
												<Button
													className="justify-start"
													nativeButton={false}
													render={<Link href={item.href} />}
													variant="ghost"
												/>
											}
										>
											{item.label}
										</DrawerClose>
									))}
								</nav>
							</DrawerPanel>
							<DrawerFooter variant="default">
								<DrawerClose
									nativeButton={false}
									render={
										<Button
											className="w-full justify-center"
											nativeButton={false}
											render={<Link href="/contact" />}
										/>
									}
								>
									Get Consultation
								</DrawerClose>
							</DrawerFooter>
						</DrawerPopup>
					</Drawer>
				</div>
			</div>
		</header>
	);
}
