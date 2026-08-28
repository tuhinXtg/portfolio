import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HomeCta() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          See how these pieces come together in Scentora and my other projects.
        </h2>
        <Button href="/projects">View My Projects</Button>
      </Container>
    </section>
  );
}
