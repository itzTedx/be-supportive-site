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
import { useScroll } from "@/hook/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-3 z-999 mx-4 rounded-sm transition-all ease-out md:mx-12",
				{ "bg-card": scrolled }
			)}
		>
			<div
				className={cn(
					"mx-auto flex h-14 w-full items-center justify-between transition-all ease-out md:h-16",
					{ "px-3": scrolled }
				)}
			>
				<nav aria-label="Primary" className="flex items-center gap-3">
					<Link className="block md:mr-6 md:px-2" href="/">
						<Logo
							className={cn(
								scrolled ? "h-10 w-auto text-[#231F20] sm:h-12" : "text-card"
							)}
						/>
					</Link>
					<div className="hidden items-center gap-3 md:flex">
						{NAV_ITEMS.map((item) => (
							<Button
								className={cn(
									"h-8 border-brand/20 bg-muted-foreground/12 px-3 font-normal text-primary-foreground tracking-wider backdrop-blur-lg hover:bg-brand-secondary hover:text-primary",
									{ "text-card": !scrolled }
								)}
								key={item.href}
								nativeButton={false}
								render={<Link href={item.href} />}
								variant="ghost"
							>
								{item.label}
							</Button>
						))}
					</div>
				</nav>

				<div className="flex items-center gap-2">
					<Button
						className={cn(
							"hidden md:inline-flex",
							!scrolled ? "text-card" : "text-brand"
						)}
						variant="outline"
					>
						<PhoneCallIcon /> +971 56 789 0123
					</Button>
					<Button nativeButton={false} render={<Link href="/get-consultation" />}>
						Get Consultation
					</Button>
					<div className="md:hidden">
						<Drawer position="left">
							<DrawerTrigger
								render={
									<Button
										className={cn(!scrolled && "text-background")}
										size="icon"
										variant="outline"
									/>
								}
							>
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
												render={<Link href="/get-consultation" />}
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
			</div>
		</header>
	);
}
