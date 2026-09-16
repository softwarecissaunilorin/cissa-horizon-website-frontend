import Image from "next/image";

export default function PresidentialAddress() {
	return (
		<section id="presidential-address" className="bg-base-200 py-16 md:py-20 lg:py-24">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-7xl">
					<div className="mb-12 text-center md:mb-14">
						<p className="text-base font-bold uppercase tracking-[0.22em] text-primary md:text-2xl">
							A Message from the President
						</p>
					</div>

					<div className="grid gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16 xl:gap-20">
						<div className="space-y-5">
							<div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-base-200">
								<Image
									src="/assets/Executives/President.jpg"
									alt="Sanni Nurudeen Akorede"
									fill
									sizes="(min-width: 1024px) 38vw, 100vw"
									className="object-cover"
									priority
								/>
							</div>

							<div className="space-y-1.5 px-1 text-center lg:px-0 lg:text-left">
								<h3 className="text-2xl font-bold leading-tight text-base-content md:text-3xl">
									Kuforiji Ayobami Waris
								</h3>
								<p className="text-sm font-medium uppercase tracking-[0.2em] text-base-content/60 md:text-base">
									18th CISSA President
								</p>
								<p className="text-sm uppercase tracking-[0.18em] text-base-content/55 md:text-base">
									2026/2027 Academic Session
								</p>
							</div>
						</div>

						<div className="space-y-6 text-base leading-8 text-base-content/80 md:text-lg md:leading-9 lg:pt-2">
							<p>
								Hi,
							</p>

							<p>
								It is with great pleasure and a deep sense of responsibility that I welcome you to the official website 
								of the Communication and Information Sciences Students’ Association (CISSA), University of Ilorin.
								Whether you are a new member of our community, a returning student, an alumnus, a partner, or simply 
								someone interested in what we do, you are welcome here.
							</p>

							<p>
								CISSA is more than an association. It is a community of students brought together by different disciplines, interests, ambitions and experiences, yet connected by a shared identity and a common journey. Our Faculty brings together 5 departments, and in that diversity lies one of our greatest strengths. We are students of technology, communication and information; we are creators, problem-solvers, storytellers, innovators and future professionals.
							</p>
							<p>
								As the Horizon Administration, we believe that the experience of a student should be about more than attending lectures and earning a degree. It should be about discovering possibilities, developing confidence, building meaningful relationships, acquiring relevant skills, finding opportunities, and becoming better prepared for the world beyond the university. 
								This website is one of the platforms through which we hope to keep our community connected. Here, you will find our activities, programmes, opportunities, updates, resources and stories; an evolving record of the people and ideas that make CISSA what it is.
							</p>
							<p>
								But ultimately, CISSA is not defined by its website, its executives, or its programmes. CISSA is defined by its people. And so, as you explore this platform, I invite you to participate, contribute, question, suggest, collaborate and make your voice heard. The future of our association cannot be built by a few people alone. It must be built together.
							</p>

							<p className="text-lg font-semibold leading-8 text-base-content md:text-xl md:leading-9">
								On behalf of the Horizon Administration, I welcome you once again to CISSA!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}