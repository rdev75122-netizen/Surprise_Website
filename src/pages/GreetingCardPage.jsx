import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GreetingCardPage.css';

const GreetingCardPage = ({ names }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        {
            title: "Happy New Year! 🎉",
            content: "Wish you a very Happy New Year Tanvi 😚😘🫂... I hope tujhe yeh sab pasand aaya hoga n ik tu abhi bohot smile kar rahi hogi but control karna koi dekh na le warna Ghar me sab ko shak ho jayega 😏😉.... "
        },
        {
            title: "Thank You 💕",
            content: "But ukw... I want to thank you for coming into my life with so many things... Tujhe lagta hai ki u have done nothing much for me but u don't know how much u have done and how crucial role u r playing in my life and how important you are to me... "
        },
        {
            title: "Grateful 🥹",
            content: "First of all... Thank you for understanding me... Thank you for listening to me... Thank you meri life ki tsunami bann ne ke liye joh ek alag tarah ki khushiya lekar aayi... Thank you mujhse itna pyaar karne ke liye... Important thing, thank you har baar meri insecurity aur jealousy ko samaj ke usko dur karne ke baad bhi mujhpe gussa na kar ke mujhse pyaar karte rehne ke liye... Thank you for everything Tanvi 🥹🥹"
        },
        {
            title: "My Promise 💪",
            content: "I know that I am not perfect yet... There are many things... Very small things that I don't do right now... But I promise that I will be the best person u dreamed of... I will be the best person u asked for... I will be the best person for whom who have waited for..."
        },
        {
            title: "I Love You 💞",
            content: "But you know what... I love you so so much Tanvi 💞🥰😘... And from the new year I just want to be with you... I want to make new memories, imagine new dreams with u late nights, n give you all the happiness you deserve 🥹🫂... Thank you for loving me and giving me the opportunity to be a part of your life 🥰🥰... "
        },
        {
            title: "Forever Together ✨",
            content: "So are you ready to make new memories and be with me forever?? "
        }
    ];

    const handleCardClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="greeting-card-page">
            {/* Floating elements */}
            <div className="floating-hearts">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="floating-heart"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 20,
                        }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth,
                        }}
                        transition={{
                            duration: 8 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        {i % 3 === 0 ? '💝' : i % 3 === 1 ? '💕' : '💖'}
                    </motion.div>
                ))}
            </div>

            <div className="greeting-content">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed-card"
                            className="closed-card-container"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <motion.div
                                className="closed-greeting-card"
                                onClick={handleCardClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="card-envelope">
                                    <div className="envelope-flap"></div>
                                    <div className="envelope-body">
                                        <div className="envelope-text">
                                            <h2>For {names.name}</h2>
                                            <p>Click to open 💌</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open-card"
                            className="open-card-container"
                            initial={{ opacity: 0, rotateY: -90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="greeting-card-book">
                                <div className="book-pages">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentPage}
                                            className="page-content"
                                            initial={{ opacity: 0, x: currentPage > 0 ? 50 : -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: currentPage > 0 ? -50 : 50 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h1 className="page-title">{pages[currentPage].title}</h1>
                                            <p className="page-text">{pages[currentPage].content}</p>

                                            <div className="page-decoration">
                                                {[...Array(5)].map((_, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="deco-element"
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                            rotate: [0, 10, -10, 0]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: i * 0.3
                                                        }}
                                                    >
                                                        {i % 2 === 0 ? '✨' : '💫'}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="page-navigation">
                                    <button
                                        className="nav-button"
                                        onClick={prevPage}
                                        disabled={currentPage === 0}
                                    >
                                        ← Previous
                                    </button>
                                    <span className="page-indicator">
                                        Page {currentPage + 1} of {pages.length}
                                    </span>
                                    <button
                                        className="nav-button"
                                        onClick={nextPage}
                                        disabled={currentPage === pages.length - 1}
                                    >
                                        Next →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default GreetingCardPage;
