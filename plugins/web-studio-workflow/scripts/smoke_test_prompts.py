PROMPTS = [
    "Use $website-art-direction to propose a homepage concept that feels high-trust, editorial, and clearly not AI-generated.",
    "Use $website-art-direction to redesign the services page so it sells websites first and portals second without falling into SaaS-template patterns.",
    "Use $website-build-rules to spec a case study page in Next.js App Router with semantic HTML, strong mobile hierarchy, and clear CTA flow.",
]


def main() -> None:
    for index, prompt in enumerate(PROMPTS, start=1):
        print(f"{index}. {prompt}")


if __name__ == "__main__":
    main()
