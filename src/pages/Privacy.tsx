export function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground">
          This Policy explains what information Permatable collects, how it is
          used, and the choices available to you.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
            1. Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may collect information you provide directly, such as contact
            form details and newsletter sign-up data, as well as basic usage
            information needed to operate and improve the site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
            2. How We Use Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use information to respond to inquiries, send requested
            communications, improve content quality, and maintain site security
            and reliability.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
            3. When Information Is Shared
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell personal information. We may share limited
            information with trusted service providers who help operate the
            site, subject to appropriate safeguards.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
            4. Data Retention
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain information only for as long as needed for the purposes
            described in this Policy or to meet legal obligations.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
            5. Your Choices
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You can opt out of marketing emails at any time using unsubscribe
            links. You may also contact us to request updates or deletion of
            personal information where applicable under local law.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
            6. Policy Updates
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Policy from time to time. Updates become
            effective when posted on this page.
          </p>
        </section>
      </div>
    </div>
  );
}
