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

export default function ProjectCard({ image, style = "", data }) {
    return (
        <motion.article
            className="text-start w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
        >
            <a href={`/project-details?name=${data.name}`}>
                <div className="bg-emerald-50 w-full sm:w-80 md:w-90 h-64 sm:h-80 md:h-90 rounded-2xl flex justify-center items-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-[103%] hover:translate-y-[-.5rem]">
                    <img
                        className={`${style} transition-all duration-300 ease-in-out max-w-full max-h-full object-contain`}
                        src={image}
                        alt={`${data.name} (${data.year})`}
                    />
                </div>
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
