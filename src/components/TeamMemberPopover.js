import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const modalTransition = { type: 'spring', stiffness: 400, damping: 32 };

function TeamMemberCard({ member, isSelected, onSelect }) {
    return (
      <div className="relative">
        {!isSelected ? (
          <motion.button
            type="button"
            onClick={() => onSelect(member)}
            className="group w-full text-left cursor-pointer"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-950/5 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-gray-900/10 group-hover:ring-gray-950/10">
              <div className="relative aspect-[11/12] overflow-hidden">
                <img src={member.photo} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent" />
  
                <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-8 transition-transform duration-300 ease-out group-hover:translate-y-0">
                  <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide text-gray-900 backdrop-blur-sm">{member.category}</span>
                </div>
              </div>
  
              <div className="px-4 py-4">
                <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-0.5 text-sm text-gray-500">{member.title}</p>
                {member.location && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-primary">
                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {member.location}
                  </p>
                )}
              </div>
            </div>
          </motion.button>
        ) : (
          <div className="invisible pointer-events-none" aria-hidden="true">
            <div className="rounded-2xl">
              <div className="aspect-[3/4]" />
              <div className="px-4 py-4">
                <div className="h-5" />
                <div className="mt-0.5 h-4" />
                <div className="mt-1.5 h-3.5" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  function TeamMemberModal({ member, onClose }) {
    return createPortal(
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-gray-900/60 backdrop-blur-sm"
          onClick={onClose}
        />
  
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={modalTransition}
            className="pointer-events-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-950/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[3/2]">
              <img src={member.photo} alt={member.name} className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
  
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white"
                aria-label="Close"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide text-gray-900 backdrop-blur-sm">
                    {member.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.title}</p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/10 text-sm text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-primary"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                )}
              </div>
            </div>
  
            <div className="px-5 py-5">
             {member.location && (
                <p className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {member.location}
              </p>
             )}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.bio}</p>
            </div>
          </motion.div>
        </div>
      </>,
      document.body
    );
  }
  
  export default function TeamDemo({teamMembers}) {
    const [selectedMember, setSelectedMember] = useState(null);
  
    return (
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 sm:mb-14 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leaders</h1>
            <p className="mt-2 text-gray-500">Meet the people behind our mission — leaders, builders, and innovators shaping the future.</p>
          </header>
  
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-8 2xl:grid-cols-4">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} isSelected={selectedMember?.id === member.id} onSelect={setSelectedMember} />
            ))}
          </div>
        </div>
  
        <AnimatePresence>
          {selectedMember && (
            <TeamMemberModal
              key={selectedMember.id}
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }
  