import { motion } from 'framer-motion'

/**
 * @typedef {Object} ProjectData
 * @property {string} name
 * @property {string} year
 * @property {boolean=} development
 */

/**
 * @param {{ image: string; style?: string; data: ProjectData }} props
 */

const EASE = [0.22, 1, 0.36, 1];

export default function ProjectCard({ image, style = "", data }) {
    return (
        <motion.article
            className="text-start w-full sm:w-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
        >
            <a href={`/project-details?name=${data.name}`}>
                <motion.div
                    className="bg-emerald-50 w-full sm:w-80 md:w-90 h-64 sm:h-80 md:h-90 rounded-2xl flex justify-center items-center overflow-hidden"
                    whileHover={{ y: -8, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                    <motion.img
                        className={`${style} max-w-full max-h-full object-contain`}
                        src={image}
                        alt={`${data.name} (${data.year})`}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    />
                </motion.div>
                <div className="mt-3 md:mt-4">
                    <h4 className="font-semibold text-base md:text-lg">{data.name}</h4>
                    <p className="text-sm md:text-base text-zinc-500">{data.year}</p>
                    <span className="italic text-xs md:text-sm text-zinc-400 font-light">
                        {data.development ? "(En desarrollo)" : ""}
                    </span>
                </div>
            </a>
        </motion.article>
    );
}
