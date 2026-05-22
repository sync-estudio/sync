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
    const detailHref = `/project-details?name=${data.name}`;
    return (
        <motion.article
            className="text-start w-full sm:w-auto flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
        >
            <div
                className="bg-emerald-50 w-full sm:w-80 md:w-90 h-64 sm:h-80 md:h-90 rounded-2xl flex justify-center items-center overflow-hidden"
            >
                <img
                    className={`${style} max-w-full max-h-full object-contain`}
                    src={image}
                    alt={`${data.name} (${data.year})`}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                />
            </div>
            <div>
                <h4 className="font-semibold text-base md:text-lg">{data.name}</h4>
                <p className="text-sm md:text-base text-zinc-500">{data.year}</p>
                <span className="italic text-xs md:text-sm text-zinc-400 font-light">
                    {data.development ? "(En desarrollo)" : ""}
                </span>
            </div>
            <div>
                <a
                    href={detailHref}
                    className="inline-flex items-center justify-center rounded-full border border-current/25 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                    Leer más
                </a>
            </div>
        </motion.article>
    );
}
