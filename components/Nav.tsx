"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { WORK_SECTIONS } from "@/lib/work-sections";

type NavKey = "home" | "work" | "about" | "contact";

const CLOSE_DELAY_MS = 250;

export function Nav({
  active,
  rightLabel,
}: {
  active?: NavKey;
  rightLabel?: string;
}) {
  const [workOpen, setWorkOpen] = useState(false);
  const workItemRef = useRef<HTMLLIElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setWorkOpen(true);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setWorkOpen(false);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  }

  function closeImmediately() {
    clearCloseTimer();
    setWorkOpen(false);
  }

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!workOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (!workItemRef.current) return;
      if (!workItemRef.current.contains(e.target as Node)) {
        closeImmediately();
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeImmediately();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [workOpen]);

  return (
    <nav className="label flex items-center justify-between text-ink-soft">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-7">
        <NavItem href="/" active={active === "home"}>
          Home
        </NavItem>

        <li
          ref={workItemRef}
          className="relative"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <span
            className={`flex items-center gap-2 py-1 ${
              active === "work" ? "text-amber" : ""
            }`}
          >
            {active === "work" ? (
              <span className="cursor-blink text-amber">►</span>
            ) : null}
            <Link
              href="/work"
              className={active === "work" ? "text-amber" : "hover:text-amber"}
              onClick={closeImmediately}
            >
              Work
            </Link>
            <button
              type="button"
              aria-label="Toggle work sections"
              aria-expanded={workOpen}
              onClick={(e) => {
                e.preventDefault();
                if (workOpen) closeImmediately();
                else openMenu();
              }}
              onFocus={openMenu}
              className={`text-[0.65rem] leading-none transition-transform ${
                workOpen ? "rotate-180" : ""
              } ${active === "work" ? "text-amber" : "text-ink-mute hover:text-amber"}`}
            >
              ▾
            </button>
          </span>

          {workOpen ? (
            <div
              className="absolute left-0 top-full z-50 pt-2"
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
            >
              <ul className="flex min-w-[14rem] flex-col border-2 border-ink-soft bg-bg p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.4)]">
                {WORK_SECTIONS.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/work/${s.slug}`}
                      className="block whitespace-nowrap px-3 py-2 text-ink-soft hover:bg-amber hover:text-bg"
                      onClick={closeImmediately}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </li>

        <NavItem href="/about" active={active === "about"}>
          About
        </NavItem>
        <NavItem
          href="mailto:mattcsheffield@gmail.com"
          active={active === "contact"}
        >
          Contact
        </NavItem>
      </ul>
      {rightLabel ? (
        <span className="hidden text-olive md:inline">{rightLabel}</span>
      ) : null}
    </nav>
  );
}

function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  const isExternal = /^(mailto:|tel:|https?:)/.test(href);
  const className = active ? "text-amber" : "hover:text-amber";
  const linkEl = isExternal ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );

  if (active) {
    return (
      <li className="flex items-center gap-2">
        <span className="cursor-blink text-amber">►</span>
        {linkEl}
      </li>
    );
  }
  return <li>{linkEl}</li>;
}
