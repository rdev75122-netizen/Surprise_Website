import { motion } from 'framer-motion';
import './MemoryCard.css';

const MemoryCard = ({ card, index, isSelected, onSelect }) => {
    return (
        <>
            <div
                className="memory-card"
                onClick={onSelect}
            >
                <div className="card-inner">
                    {/* Front of card - Image */}
                    <div className="card-front">
                        <div className="card-image-container">
                            <img
                                src={card.image}
                                alt={`Memory ${card.id}`}
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%23999"%3EMemory ' + card.id + '%3C/text%3E%3C/svg%3E';
                                }}
                            />
                            <div className="card-overlay-gradient"></div>
                        </div>
                        <div className="card-front-footer">
                            <span className="card-number">#{card.id}</span>
                            <span className="card-icon">💝</span>
                        </div>
                    </div>

                    {/* Back of card - Text */}
                    <div className="card-back">
                        <div className="card-back-content">
                            <div className="card-text">{card.text}</div>
                            <div className="card-decoration">
                                <span className="deco-heart">💖</span>
                                <span className="deco-star">✨</span>
                                <span className="deco-heart">💖</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sparkle effect on hover */}
                <div
                    className="card-sparkles"
                >
                    <span className="sparkle sparkle-1">✨</span>
                    <span className="sparkle sparkle-2">✨</span>
                    <span className="sparkle sparkle-3">✨</span>
                    <span className="sparkle sparkle-4">✨</span>
                </div>
            </div>

            {/* Expanded view - Portal style popup */}
            {isSelected && (
                <motion.div
                    className="expanded-card-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onSelect}
                >
                    <motion.div
                        className="expanded-card-wrapper"
                        initial={{ scale: 0.3, rotateY: 180, opacity: 0 }}
                        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                        exit={{ scale: 0.3, rotateY: -180, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="expanded-card-content-wrapper">
                            {/* Show text since we're rotated */}
                            <div className="expanded-card-text-display">
                                <h3 className="expanded-card-title">{card.text}</h3>
                                <div className="expanded-card-decoration">
                                    {[...Array(8)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            className="expanded-deco"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 360],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        >
                                            {i % 2 === 0 ? '💝' : '✨'}
                                        </motion.span>
                                    ))}
                                </div>
                                <p className="click-instruction">Click anywhere to close</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default MemoryCard;
