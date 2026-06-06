import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Standard scroll-reveal: fade + slide up */
export function revealUp(
  el: Element | null,
  opts: { y?: number; delay?: number; duration?: number; start?: string } = {}
) {
  if (!el || prefersReducedMotion()) return;
  const { y = 36, delay = 0, duration = 0.72, start = "top 88%" } = opts;
  gsap.fromTo(
    el,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start, once: true },
    }
  );
}

/** Stagger a list of elements on scroll */
export function staggerReveal(
  els: Element[],
  trigger: Element | null,
  opts: { y?: number; stagger?: number; duration?: number; start?: string } = {}
) {
  if (!els.length || !trigger || prefersReducedMotion()) return;
  const { y = 40, stagger = 0.09, duration = 0.65, start = "top 85%" } = opts;
  gsap.fromTo(
    els,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger, start, once: true },
    }
  );
}

/** Count a number up from 0 to target */
export function countUp(
  el: Element | null,
  target: number,
  trigger: Element | null,
  opts: { duration?: number; start?: string } = {}
) {
  if (!el || !trigger || prefersReducedMotion()) {
    if (el) el.textContent = target > 0 ? target.toLocaleString("en-US") : "—";
    return;
  }
  const { duration = 2.2, start = "top 85%" } = opts;
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration,
    ease: "power2.out",
    snap: { val: 1 },
    scrollTrigger: { trigger, start, once: true },
    onUpdate: () => {
      el.textContent = Math.round(obj.val).toLocaleString("en-US");
    },
    onComplete: () => {
      el.textContent = target > 0 ? target.toLocaleString("en-US") : "—";
    },
  });
}
