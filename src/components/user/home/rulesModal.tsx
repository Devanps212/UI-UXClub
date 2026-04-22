import { FaCheckCircle, FaScroll, FaTimes } from "react-icons/fa";

const RulesModal = ({
  setShowRules,
}: {
  setShowRules: (val: boolean) => void;
}) => {
  const CLUB_RULES = [
    {
      number: "01",
      title: "Respect Every Creator",
      desc: "Treat every member's work with respect regardless of their skill level. Constructive feedback only — no mockery, gatekeeping, or discouragement.",
    },
    {
      number: "02",
      title: "No 18+ Content",
      desc: "Keep the platform safe for everyone. Explicit, adult, or inappropriate content is not allowed.",
    },
    {
      number: "03",
      title: "Showcase Original Work Only",
      desc: "Only post projects you created or significantly contributed to. Credit collaborators, tools, and inspirations honestly.",
    },
    {
      number: "04",
      title: "No Plagiarism",
      desc: "Do not copy or repost others’ work as your own. Respect originality and give proper credit where it's due.",
    },
    {
      number: "05",
      title: "Grow Together, Not Against Each Other",
      desc: "This is a community, not a competition. Share resources, tutorials, and opportunities freely.",
    },
    {
      number: "06",
      title: "No Spam or Self-Promotion Floods",
      desc: "You can share your work, but avoid repeated promotion. Focus on quality over quantity.",
    },
    {
      number: "07",
      title: "Keep It Professional & Inclusive",
      desc: "No hate speech, discrimination, or exclusionary behavior. Respect everyone.",
    },
    {
      number: "08",
      title: "Respect Feedback",
      desc: "Be open to feedback and discussions. Different perspectives help everyone improve.",
    },
  ];

  return (
    <div
      className="fixed inset-0 w-full h-full z-99999 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowRules(false);
      }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{
          background:
            "linear-gradient(145deg, #fffde7 0%, #ffffff 60%, #fff8e1 100%)",
          border: "2px solid #FFD700",
        }}
      >
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 rounded-t-3xl"
          style={{
            background: "linear-gradient(to right, #FFD700, #FFF176)",
            borderBottom: "1px solid #f0c800",
          }}
        >
          <div className="flex items-center gap-3">
            <FaScroll className="text-yellow-900 text-xl" />
            <h2 className="font-display text-2xl font-black text-yellow-900 leading-none">
              Club Rules
            </h2>
          </div>
          <button
            onClick={() => setShowRules(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-900/10 hover:bg-yellow-900/20 transition text-yellow-900"
          >
            <FaTimes />
          </button>
        </div>

        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {CLUB_RULES.map((rule) => (
            <div
              key={rule.number}
              className="flex gap-4 items-start p-4 rounded-2xl transition hover:shadow-md"
              style={{
                background: "rgba(255, 215, 0, 0.07)",
                border: "1px solid rgba(255, 215, 0, 0.3)",
              }}
            >
              <span
                className="font-display text-2xl font-black leading-none shrink-0"
                style={{ color: "#FFD700" }}
              >
                {rule.number}
              </span>
              <div>
                <h3 className="font-display tracking-wider font-normal text-black text-base mb-1 flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-sm shrink-0" />
                  {rule.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="sticky bottom-0 px-6 py-4 rounded-b-3xl flex items-center justify-between"
          style={{
            background: "linear-gradient(to top, #fffde7, transparent)",
            borderTop: "1px solid rgba(255,215,0,0.2)",
          }}
        >
          <p className="font-body text-xs text-gray-400">
            By joining, you agree to uphold these rules.
          </p>
          <button
            onClick={() => setShowRules(false)}
            className="font-body px-5 py-2 text-sm font-semibold rounded-xl text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-300/40"
            style={{
              background: "linear-gradient(to right, #FFD700, #FFF176)",
            }}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
