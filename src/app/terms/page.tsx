import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for booking and using ${SITE.name} online Maths tuition services.`,
  alternates: { canonical: `${SITE.url}/terms/` },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="These terms set out how Bright Path Tuition bookings and lessons work for parents and students."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-16">
        <div className="prose prose-navy mx-auto max-w-3xl space-y-6 px-4 text-muted sm:px-6">
          <p className="text-sm font-medium text-gold">
            Last updated: 12 September 2026
          </p>

          <h2 className="text-xl font-bold text-navy">1. About Bright Path Tuition</h2>
          <p>
            These Terms &amp; Conditions apply when you enquire about or book tuition with Bright
            Path Tuition (&quot;we&quot;, &quot;us&quot;). Our website is{" "}
            <a className="text-navy underline" href={SITE.url}>
              {SITE.domain}
            </a>
            . Contact us at{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-navy">2. Our tuition services</h2>
          <p>
            We provide live online Maths tuition for students following the British curriculum,
            including KS2, KS3, GCSE and A-Level. Lessons may be offered in small groups or as
            one-to-one sessions, as agreed when you book. Details of current programmes and fees
            are shown on our website and confirmed when a place is arranged.
          </p>

          <h2 className="text-xl font-bold text-navy">3. Parents and students</h2>
          <p>
            Bookings are usually made by a parent or guardian on behalf of a student. By booking,
            you confirm that you have authority to arrange tuition for the student and that the
            information you give us is accurate. Students are expected to attend agreed lessons
            and to take part respectfully.
          </p>

          <h2 className="text-xl font-bold text-navy">4. Bookings and class places</h2>
          <p>
            A booking is confirmed when we accept it in writing (for example by email or message)
            and any required payment arrangements are in place. Group places depend on suitable
            year-group and timetable availability. We will confirm the class, schedule and fee
            before tuition starts.
          </p>

          <h2 className="text-xl font-bold text-navy">5. Fees and payment</h2>
          <p>
            Fees for group tuition are normally charged in four-week blocks in advance, covering
            four scheduled 1-hour lessons unless we agree otherwise in writing. One-to-one fees
            are charged at the agreed hourly rate. Current prices are published on our Pricing
            page and confirmed at booking. Payment methods and due dates will be set out when we
            confirm your place.
          </p>

          <h2 className="text-xl font-bold text-navy">6. Continuing or ending tuition</h2>
          <p>
            After a paid block or agreed period ends, tuition continues only if a further booking
            and payment are arranged. Either you or we may end ongoing tuition by giving
            reasonable notice in writing. Ending tuition does not affect amounts already due for
            lessons or blocks that have been confirmed, except where these terms or the law say
            otherwise.
          </p>

          <h2 className="text-xl font-bold text-navy">
            7. Statutory cancellation rights for online bookings
          </h2>
          <p>
            If you book online as a consumer, you may have a legal right to cancel a distance
            contract within 14 days of booking without giving a reason.
          </p>
          <p>
            If you ask us to start tuition during that 14-day period, you agree that we may begin
            the service early. If you then cancel after lessons have started, you may still have
            to pay a proportionate amount for the tuition already provided up to the time you
            cancel.
          </p>
          <p>
            To cancel within any applicable cooling-off period, email{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            clearly stating that you wish to cancel.
          </p>

          <h2 className="text-xl font-bold text-navy">8. Student missed lessons</h2>
          <p>
            For group tuition, fees reserve your child&apos;s place in the class. Missed lessons
            are not normally refundable. Where it is practical, we will still provide lesson
            materials and homework so the student can keep up.
          </p>

          <h2 className="text-xl font-bold text-navy">9. Lessons cancelled by Bright Path</h2>
          <p>
            If we cancel a lesson (for example because of tutor illness or a technical problem on
            our side), we will offer a replacement lesson, a credit, or a refund for that lesson,
            as appropriate.
          </p>

          <h2 className="text-xl font-bold text-navy">10. One-to-one rearrangements and cancellations</h2>
          <p>
            For one-to-one lessons, you may rearrange or cancel without charge if you give us at
            least 24 hours&apos; notice before the scheduled start time. Less than 24 hours&apos;
            notice, or non-attendance without notice, may mean the lesson is charged as booked.
          </p>

          <h2 className="text-xl font-bold text-navy">11. Technology</h2>
          <p>
            Online lessons need a suitable device, a stable internet connection, and a quiet space
            where the student can see, hear and take part. You are responsible for your own
            device, software and connection. We are not responsible for lesson disruption caused
            by problems with your equipment or internet, though we will try to help where we
            reasonably can.
          </p>

          <h2 className="text-xl font-bold text-navy">12. Student conduct</h2>
          <p>
            Students must behave respectfully towards tutors and other students. We may pause or
            end tuition if conduct seriously disrupts a lesson or makes a safe learning
            environment difficult. We will contact the parent or guardian if concerns arise.
          </p>

          <h2 className="text-xl font-bold text-navy">13. Safeguarding</h2>
          <p>
            The wellbeing of students is important to us. Online lessons should take place in an
            appropriate shared space at home where a parent or guardian can be nearby. Our full
            safeguarding arrangements are being confirmed and will be updated here when finalised.
            If you have an immediate safeguarding concern, contact the relevant authorities as
            well as emailing{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-navy">14. Teaching materials and intellectual property</h2>
          <p>
            Lesson materials, worksheets, notes and other content we provide are for the personal
            educational use of the booked student and their parent or guardian. You must not copy,
            share, sell or publish them more widely without our written permission.
          </p>

          <h2 className="text-xl font-bold text-navy">15. Results and our standard of care</h2>
          <p>
            We provide tuition with reasonable care and skill. Academic results depend on many
            factors, including school teaching, attendance, practice and individual circumstances.
            We do not guarantee specific grades or outcomes.
          </p>

          <h2 className="text-xl font-bold text-navy">16. Privacy</h2>
          <p>
            How we collect and use personal information is explained in our{" "}
            <Link href="/privacy/" className="text-navy underline">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-navy">17. Complaints</h2>
          <p>
            If you are unhappy with any part of our service, please email{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            and we will look into it as soon as we reasonably can.
          </p>

          <h2 className="text-xl font-bold text-navy">18. Changes to these terms</h2>
          <p>
            We may update these Terms &amp; Conditions from time to time. If we make material
            changes that affect existing bookings, we will communicate them to you (for example
            by email). The version on this page at the time of your booking will apply unless we
            agree otherwise in writing.
          </p>

          <h2 className="text-xl font-bold text-navy">19. Your consumer rights</h2>
          <p>
            Nothing in these terms affects your statutory rights as a consumer under applicable
            UK law.
          </p>

          <h2 className="text-xl font-bold text-navy">20. Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. The courts of England and
            Wales have jurisdiction, without limiting any rights you may have to bring proceedings
            in your local courts where the law allows.
          </p>

          <p>
            Questions about these terms:{" "}
            <a className="text-navy underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
