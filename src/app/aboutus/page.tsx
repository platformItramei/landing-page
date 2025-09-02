"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import FloatingParticles from "../../components/FloatingParticles";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-black text-gray-200 overflow-hidden">
            {/* Background elements */}
            <FloatingParticles />

            <header className="relative pt-24 pb-12 px-6 text-center z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-center text-sm uppercase tracking-widest font-semibold text-blue-400 mb-4">
                        About us
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
                        Building what raises the standard of human communication
                    </p>
                </div>
            </header>

            <main className="relative max-w-3xl mx-auto px-6 pb-16 z-10">
                {/* Who We Are Section */}
                <section className="py-12 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Who We Are</h2>
                    <div className="space-y-6 text-gray-300">
                        <p>
                            We live in a world where the way we speak can make or break a deal, a career, or a relationship.
                        </p>
                        <p>
                            And yet, most professionals are expected to perform in high-stakes conversations… without ever effectively practicing for them.
                        </p>
                        <p className="font-medium text-white">
                            Itramei is what bridges that gap.
                        </p>
                        <p>
                            We're a next-generation communication training platform, purpose-built for high-performing teams. Through on-demand, AI-powered simulations, we help people prepare for the moments that matter, before they happen.
                        </p>
                        <p>
                            Whether it's handling objections, presenting with impact, or leading through uncertainty, Itramei gives individuals a safe space to rehearse, reflect, and improve, under real-world pressure.
                        </p>
                        <p className="font-medium text-white">
                            But Itramei is more than just a platform. It's a belief.
                        </p>
                        <p>
                            That technology should amplify, not replace, human connection.
                        </p>
                        <p>
                            That presence, empathy, storytelling, and self-expression are skills, and skills can be trained.
                        </p>
                        <p>
                            And that no one should have to "wing it" in their most important conversations.
                        </p>
                        <p className="font-medium text-white">
                            We help teams show up not just more confident, but more human.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-12 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Our Story</h2>
                    <div className="space-y-6 text-gray-300">
                        <p>
                            We built Itramei because we needed it ourselves.
                        </p>
                        <p>
                            In our own careers, we were trained on frameworks and messaging decks, but never truly prepared for real conversations.
                        </p>
                        <p>
                            No pressure-testing. No proper feedback. No space to fail forward.
                        </p>
                        <p className="font-medium text-white">
                            So we asked: Why is communication, the most critical part of our jobs, the least practiced?
                        </p>
                        <p>
                            We knew there had to be a better way.
                        </p>
                        <p className="font-medium text-white">
                            Itramei was born from that frustration: a desire to help professionals stop learning by failing live, and start learning by training smart.
                        </p>
                        <p>
                            We built what we wished we'd had, a place to practice, a place to grow.
                        </p>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-12 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Our Mission</h2>
                    <div className="space-y-6 text-gray-300">
                        <p className="text-xl text-white font-medium">
                            Our mission is simple: To help the world communicate better.
                        </p>
                        <p>
                            By 2030, we aim to become the world's leading platform for mastering human communication in sales, leadership, and everyday life.
                        </p>
                        <p className="font-medium text-white">
                            Because words shape decisions.
                        </p>
                        <p className="font-medium text-white">
                            Tone builds (or breaks) trust.
                        </p>
                        <p>
                            And in a world driven by noise, the ability to speak with clarity, confidence, and empathy is no longer optional, it's a superpower.
                        </p>
                        <p className="font-medium text-white">
                            Itramei exists to train that superpower.
                        </p>
                        <p>
                            So you don't have to guess.
                        </p>
                        <p>
                            You just show up, ready.
                        </p>
                        <p className="text-xl font-bold text-white mt-8">
                            Because The Power is in Your Voice.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}