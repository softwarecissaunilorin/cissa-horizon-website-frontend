import { ExternalLink, FileText, FolderOpen } from "lucide-react";

import {
    SEMESTERS,
    fileUrl,
    folderUrl,
    type MaterialFolder,
} from "@/lib/materials";

function fileKind(name: string): string | null {
    const n = name.toLowerCase();
    if (/outline/.test(n)) return "Outline";
    if (/\bpq\b|past q|question|exam|test|mock|cbt/.test(n)) return "Past questions";
    if (/note|lecture|slide|module|handout|summary|study guide|compil/.test(n)) return "Notes";
    return null;
}

export default function MaterialCard({ material }: { material: MaterialFolder }) {
    const semesterLabel =
        material.semester === "all"
            ? "All semesters"
            : `${SEMESTERS.find((s) => s.value === material.semester)?.label} Semester`;
    const count = material.files.length;

    return (
        <article className="flex h-full flex-col justify-between gap-5 rounded-xl border border-primary/20 bg-base-100 p-5 transition-shadow hover:shadow-md">
            <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-content">
                        <FolderOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {material.department}
                    </span>
                    <span className="text-sm text-base-content/60">
                        {count} {count === 1 ? "PDF" : "PDFs"}
                    </span>
                </div>

                <h2 className="text-2xl font-semibold leading-snug text-base-content">
                    {material.course_code}
                </h2>
                {material.course_title ? (
                    <p className="text-sm text-base-content/70">{material.course_title}</p>
                ) : null}

                <ul className="flex flex-wrap gap-2 text-xs text-base-content/70">
                    <li className="rounded-md bg-base-200 px-2 py-1">{material.level} Level</li>
                    <li className="rounded-md bg-base-200 px-2 py-1">{semesterLabel}</li>
                </ul>

                <details className="group rounded-lg border border-base-300">
                    <summary className="cursor-pointer select-none px-3 py-2 text-sm font-medium">
                        View files
                    </summary>
                    <ul className="max-h-64 divide-y divide-base-300 overflow-y-auto border-t border-base-300">
                        {material.files.map((file) => {
                            const kind = fileKind(file.name);
                            return (
                                <li key={file.id}>
                                    <a
                                        href={fileUrl(file.id)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-2 px-3 py-2 text-sm hover:bg-base-200"
                                    >
                                        <FileText
                                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                            aria-hidden="true"
                                        />
                                        <span className="min-w-0 flex-1 wrap-break-word">
                                            {file.name}
                                        </span>
                                        {kind ? (
                                            <span className="shrink-0 rounded bg-base-200 px-1.5 py-0.5 text-[0.65rem] text-base-content/60">
                                                {kind}
                                            </span>
                                        ) : null}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </details>
            </div>

            <a
                href={folderUrl(material.folder_id)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm w-full rounded-full"
                aria-label={`Open ${material.department} ${material.level} level ${material.course_code} folder on Google Drive`}
            >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Open folder
            </a>
        </article>
    );
}
