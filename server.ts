import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Mock Data
  const reviews = [
    {
      id: "casino-royal",
      name: "Casino Royal",
      rating: 4.8,
      image: "https://picsum.photos/seed/casino1/800/600",
      description: "The gold standard of luxury gaming with unparalleled service.",
      established: "2015",
      license: "Malta Gaming Authority",
      games: ["Slots", "Live Poker", "Roulette", "Baccarat"],
      payoutSpeed: "Instant - 12 hours",
      pros: ["Elite VIP program", "High withdrawal limits", "24/7 concierge support"],
      cons: ["Strict KYC process", "Limited regional availability"],
      review: "Casino Royal offers a truly sophisticated experience. From the moment you enter their digital lobby, the attention to detail is evident. Their selection of high-stakes tables is particularly impressive, catering to the most discerning players."
    },
    {
      id: "azure-palace",
      name: "Azure Palace",
      rating: 4.5,
      image: "https://picsum.photos/seed/casino2/800/600",
      description: "A modern oasis of entertainment with a focus on innovative slots.",
      established: "2019",
      license: "Curacao",
      games: ["Slots", "Jackpots", "Live Dealer"],
      payoutSpeed: "1-24 hours",
      pros: ["Modern interface", "Crypto friendly", "Daily tournaments"],
      cons: ["Fewer table games", "Higher wagering requirements"],
      review: "Azure Palace stands out with its sleek, user-friendly interface. It's a perfect choice for players who enjoy the latest video slots and a seamless mobile experience."
    },
    {
      id: "golden-empire",
      name: "Golden Empire",
      rating: 4.2,
      image: "https://picsum.photos/seed/casino3/800/600",
      description: "Classic elegance meets modern technology in this established hub.",
      established: "2010",
      license: "UK Gambling Commission",
      games: ["Slots", "Sportsbook", "Live Casino"],
      payoutSpeed: "2-3 days",
      pros: ["Highly trusted brand", "Excellent sportsbook", "Large game library"],
      cons: ["Slower payouts", "Dated mobile app"],
      review: "Golden Empire is a household name for a reason. Their reliability and extensive game library make them a safe bet for any entertainment enthusiast."
    }
  ];

  const guides = [
    {
      id: "beginner-guide",
      title: "Beginner's Guide to Premium Gaming",
      category: "Basics",
      readTime: "5 min",
      difficulty: "Easy",
      excerpt: "Everything you need to know to start your luxury entertainment journey safely."
    },
    {
      id: "payment-methods",
      title: "Payment Methods Explained",
      category: "Finance",
      readTime: "8 min",
      difficulty: "Medium",
      excerpt: "A deep dive into the fastest and most secure ways to manage your funds."
    },
    {
      id: "understanding-licenses",
      title: "Understanding Gaming Licenses",
      category: "Safety",
      readTime: "10 min",
      difficulty: "Hard",
      excerpt: "Why licensing matters and how to identify a trustworthy platform."
    }
  ];

  const news = [
    {
      id: "industry-trends-2026",
      title: "Top Industry Trends for 2026",
      date: "March 12, 2026",
      category: "Trends",
      excerpt: "How AI and VR are reshaping the future of digital entertainment hubs.",
      image: "https://picsum.photos/seed/news1/800/600"
    },
    {
      id: "new-regulations",
      title: "New Global Regulations Update",
      date: "March 10, 2026",
      category: "Legal",
      excerpt: "What the latest regulatory changes mean for international players.",
      image: "https://picsum.photos/seed/news2/800/600"
    }
  ];

  // API Endpoints
  app.get("/api/reviews", (req, res) => {
    res.json(reviews);
  });

  app.get("/api/reviews/:id", (req, res) => {
    const review = reviews.find(r => r.id === req.params.id);
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  });

  app.get("/api/guides", (req, res) => {
    res.json(guides);
  });

  app.get("/api/news", (req, res) => {
    res.json(news);
  });

  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    // In a real app, save to DB
    console.log(`Newsletter signup: ${email}`);
    res.json({ success: true, message: "Successfully subscribed!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
