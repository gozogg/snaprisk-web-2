import '../App.css';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSearchParams } from 'react-router-dom';

const VALID_SOLUTIONS = ['hpr', 'snaprec', 'snapcat', 'snapcope', 'snapir', 'snapvalues', 'self-e-audit', 'snapalert'];

function Contact() {
  const [inquiryType, setInquiryType] = useState('');
  const [role, setRole] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const type = searchParams.get('type');
    const role = searchParams.get('role');
    const selectedSolution = searchParams.get('solution');
    if (['demo', 'careers', 'queries', 'solutions'].includes(type)) {
      setInquiryType(type);
    }
    if (role) {
      setRole(role);
    }
    if (selectedSolution && VALID_SOLUTIONS.includes(selectedSolution)) {
      setSolution(selectedSolution);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!success) return;
    const onKeyDown = e => {
      if (e.key === 'Escape') setSuccess(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [success]);


  const fieldClassName =
    'mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';

  const getFormValues = form => {
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    return { formData, values };
  };

  async function handleCareer(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setError(null);
  
    const { formData, values } = getFormValues(form);
    const resume = formData.get('resume'); // File object
  
    // Build a FormData payload instead of JSON
    const payload = new FormData();
    payload.append('first_name', values.firstName);
    payload.append('last_name', values.lastName);
    payload.append('email', values.email);
    payload.append('current_company', values.company);
    payload.append('role', values.roleOfInterest);
    payload.append('linkedin', values.linkedin);
    payload.append('experience', values.experience);
    payload.append('resume', resume); // actual File object
  
    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        body: payload,
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDemo(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setError(null);
    const { formData, values } = getFormValues(form);
    const selectedSolutions = formData.getAll('solutionsInterestedIn');

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        body: JSON.stringify({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          company: values.company,
          size: values.portfolioSize,
          timeline: values.timeline,
          goals: values.goals,
          solutions: selectedSolutions,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSolutions(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setError(null);
    const { formData, values } = getFormValues(form);
    const selectedSolutions = formData.getAll('solutionsInterestedIn');

    try {
      const res = await fetch('/api/solutions', {
        method: 'POST',
        body: JSON.stringify({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          company: values.company,
          goals: values.goals,
          solutions: selectedSolutions,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setError(null);

    const { values } = getFormValues(form);
    console.log('additional query values:', values);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          full_name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="hero" id="contact">
        <Navbar />
      </header>

      <main className="px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <section className="mx-auto mt-10 max-w-4xl rounded-3xl border border-primary/20 bg-secondary p-8 shadow-sm md:mt-12 md:p-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
          <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            How Can We Help?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
            Select an inquiry type to see the right form and connect with the SnapRISK team faster.
          </p>

          <div className="mx-auto mt-8 max-w-lg">
            <label htmlFor="inquiryType" className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-600">
              Select Inquiry Type
            </label>
            <select
              id="inquiryType"
              value={inquiryType}
              onChange={event => setInquiryType(event.target.value)}
              className={fieldClassName}
            >
              <option value="">Choose an option</option>
              <option value="demo">Request Demo</option>
              <option value="solutions">Solutions and Products</option>
              <option value="careers">Careers</option>
              <option value="queries">Additional Queries</option>
            </select>
          </div>
        </section>

        {error && (
          <p className="mx-auto mt-6 max-w-4xl rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-800">
            {error}
          </p>
        )}

        {inquiryType && (
          <section className="mx-auto mt-8 max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            {inquiryType === 'demo' && (
              <form className="space-y-5" onSubmit={handleDemo}>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Request Demo</h2>
                <p className="text-gray-600">Tell us about your portfolio and we&apos;ll schedule a tailored walkthrough.</p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="demoFirstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <input id="demoFirstName" name="firstName" type="text" className={fieldClassName} required />
                  </div>
                  <div>
                    <label htmlFor="demoLastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <input id="demoLastName" name="lastName" type="text" className={fieldClassName} required />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="demoEmail" className="text-sm font-medium text-gray-700">Work Email</label>
                    <input id="demoEmail" name="email" type="email" className={fieldClassName} required />
                  </div>
                  <div>
                    <label htmlFor="demoCompany" className="text-sm font-medium text-gray-700">Company</label>
                    <input id="demoCompany" name="company" type="text" className={fieldClassName} required />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="portfolioSize" className="text-sm font-medium text-gray-700">Portfolio Size</label>
                    <input id="portfolioSize" name="portfolioSize" type="text" placeholder="e.g., 120 locations" className={fieldClassName} />
                  </div>
                  <div>
                    <label htmlFor="demoTimeline" className="text-sm font-medium text-gray-700">Desired Timeline</label>
                    <select id="demoTimeline" name="timeline" className={fieldClassName}>
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="30-days">Within 30 days</option>
                      <option value="this-quarter">This quarter</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm font-medium text-gray-700">Select Solutions Interested In</legend>
                  <div className="mt-3 grid gap-2 rounded-md border border-gray-300 bg-white p-4 sm:grid-cols-2">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="hpr" defaultChecked={solution === 'hpr'} className="h-4 w-4 accent-primary" />
                      HPR
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snaprec" defaultChecked={solution === 'snaprec'} className="h-4 w-4 accent-primary" />
                      SnapREC
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapcat" defaultChecked={solution === 'snapcat'} className="h-4 w-4 accent-primary" />
                      SnapCAT
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapcope" defaultChecked={solution === 'snapcope'} className="h-4 w-4 accent-primary" />
                      SnapCOPE
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapir" defaultChecked={solution === 'snapir'} className="h-4 w-4 accent-primary" />
                      SnapIR
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapvalues" defaultChecked={solution === 'snapvalues'} className="h-4 w-4 accent-primary" />
                      SnapVALUES
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="self-e-audit" defaultChecked={solution === 'self-e-audit'} className="h-4 w-4 accent-primary" />
                      Self eAudit
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapalert" defaultChecked={solution === 'snapalert'} className="h-4 w-4 accent-primary" />
                      SnapALERT
                    </label>
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="demoGoals" className="text-sm font-medium text-gray-700">Primary Goals</label>
                  <textarea
                    id="demoGoals"
                    name="goals"
                    rows="4"
                    className={fieldClassName}
                    placeholder="What do you want to improve (e.g., underwriting data quality, NatCat visibility, recommendation tracking)?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Submit Demo Request'}
                </button>
              </form>
            )}

            {inquiryType === 'solutions' && (
              <form className="space-y-5" onSubmit={handleSolutions}>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Solutions and Products</h2>
                <p className="text-gray-600">If you're interested in learning more about some of our solutions</p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="solutionsFirstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <input id="solutionsFirstName" name="firstName" type="text" className={fieldClassName} required />
                  </div>
                  <div>
                    <label htmlFor="solutionsLastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <input id="solutionsLastName" name="lastName" type="text" className={fieldClassName} required />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="solutionsEmail" className="text-sm font-medium text-gray-700">Work Email</label>
                    <input id="solutionsEmail" name="email" type="email" className={fieldClassName} required />
                  </div>
                  <div>
                    <label htmlFor="solutionsCompany" className="text-sm font-medium text-gray-700">Company</label>
                    <input id="solutionsCompany" name="company" type="text" className={fieldClassName} required />
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm font-medium text-gray-700">Select Solutions Interested In</legend>
                  <div className="mt-3 grid gap-2 rounded-md border border-gray-300 bg-white p-4 sm:grid-cols-2">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="hpr" defaultChecked={solution === 'hpr'} className="h-4 w-4 accent-primary" />
                      HPR
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snaprec" defaultChecked={solution === 'snaprec'} className="h-4 w-4 accent-primary" />
                      SnapREC
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapcat" defaultChecked={solution === 'snapcat'} className="h-4 w-4 accent-primary" />
                      SnapCAT
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapcope" defaultChecked={solution === 'snapcope'} className="h-4 w-4 accent-primary" />
                      SnapCOPE
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapir" defaultChecked={solution === 'snapir'} className="h-4 w-4 accent-primary" />
                      SnapIR
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapvalues" defaultChecked={solution === 'snapvalues'} className="h-4 w-4 accent-primary" />
                      SnapVALUES
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="self-e-audit" defaultChecked={solution === 'self-e-audit'} className="h-4 w-4 accent-primary" />
                      Self eAudit
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="solutionsInterestedIn" value="snapalert" defaultChecked={solution === 'snapalert'} className="h-4 w-4 accent-primary" />
                      SnapALERT
                    </label>
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="solutionsGoals" className="text-sm font-medium text-gray-700">Primary Goals</label>
                  <textarea
                    id="solutionsGoals"
                    name="goals"
                    rows="4"
                    className={fieldClassName}
                    placeholder="What do you want to improve (e.g., underwriting data quality, NatCat visibility, recommendation tracking)?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Submit Solutions Request'}
                </button>
              </form>
            )}

            {inquiryType === 'careers' && (
              <form className="space-y-5" onSubmit={handleCareer}>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Careers Inquiry</h2>
                <p className="text-gray-600">Share your background and role interests with our recruiting team.</p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="careerFirstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <input id="careerFirstName" name="firstName" type="text" className={fieldClassName} required />
                  </div>
                  <div>
                    <label htmlFor="careerLastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <input id="careerLastName" name="lastName" type="text" className={fieldClassName} required />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="careerEmail" className="text-sm font-medium text-gray-700">Email</label>
                    <input id="careerEmail" name="email" type="email" className={fieldClassName} required />
                  </div>
                  <div>
                    <label htmlFor="careerCompany" className="text-sm font-medium text-gray-700">Current Company</label>
                    <input id="careerCompany" name="company" type="text" className={fieldClassName} />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="careerRole" className="text-sm font-medium text-gray-700">Role of Interest</label>
                    <input id="careerRole" name="roleOfInterest" type="text" className={fieldClassName} placeholder="e.g., Risk Engineer, Product Manager" value={role} onChange={e => setRole(e.target.value)}/>
                  </div>
                  <div>
                    <label htmlFor="careerLinkedIn" className="text-sm font-medium text-gray-700">LinkedIn URL</label>
                    <input id="careerLinkedIn" name="linkedin" type="url" className={fieldClassName} placeholder="https://linkedin.com/in/..." />
                  </div>
                </div>

                <div>
                  <label htmlFor="careerExperience" className="text-sm font-medium text-gray-700">Relevant Experience</label>
                  <textarea
                    id="careerExperience"
                    name="experience"
                    rows="4"
                    className={fieldClassName}
                    placeholder="Tell us a bit about your background and why you&apos;re interested in SnapRISK."
                  />
                </div>

                <div>
                  <label htmlFor="careerResume" className="text-sm font-medium text-gray-700">Resume</label>
                  <input
                    id="careerResume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={fieldClassName}
                  />
                  <p className="mt-1 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Submit Careers Inquiry'}
                </button>
              </form>
            )}

            {inquiryType === 'queries' && (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Additional Queries</h2>
                <p className="text-gray-600">Send us your question and we&apos;ll route it to the right team.</p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="queryName" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input id="queryName" name="name" type="text" className={fieldClassName} required />
                  </div>
                  <div>
                    <label htmlFor="queryEmail" className="text-sm font-medium text-gray-700">Email</label>
                    <input id="queryEmail" name="email" type="email" className={fieldClassName} required />
                  </div>
                </div>

                <div>
                  <label htmlFor="querySubject" className="text-sm font-medium text-gray-700">Subject</label>
                  <input id="querySubject" name="subject" type="text" className={fieldClassName} required />
                </div>

                <div>
                  <label htmlFor="queryMessage" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea id="queryMessage" name="message" rows="5" className={fieldClassName} required />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </section>
        )}
      </main>

      {success && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
          role="presentation"
          onClick={() => setSuccess(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            className="max-w-md rounded-2xl border border-primary/20 bg-white p-8 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Thank you</p>
            <h2 id="contact-success-title" className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
              Message sent
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We received your submission and will follow up soon.
            </p>
            <button
              type="button"
              className="mt-6 w-full rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
              onClick={() => setSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
