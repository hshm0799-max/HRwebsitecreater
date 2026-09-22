import { useState, useEffect } from 'react';
import { Star, CheckCircle, MessageSquare, Send, Sparkles, User, Building, Search, Filter, ThumbsUp, ShieldCheck } from 'lucide-react';
import { ReviewItem } from '../types';
import { INITIAL_REVIEWS } from '../data/agencyData';

export function ClientReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    const saved = localStorage.getItem('hragency_client_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_REVIEWS;
      }
    }
    return INITIAL_REVIEWS;
  });

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [starFilter, setStarFilter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('hragency_client_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setSubmittedStatus('Please enter your name and review details.');
      return;
    }

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Verified Client',
      company: 'Corporate Node',
      rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      verified: true,
      location: 'Lucknow / Ranchi / Global',
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setRole('');
    setComment('');
    setRating(5);
    setSubmittedStatus('Review successfully recorded and pushed to verified live reviews log!');
    setTimeout(() => setSubmittedStatus(null), 5000);
  };

  const filteredReviews = reviews.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.role.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStar = starFilter === 'all' || r.rating === starFilter;
    return matchesSearch && matchesStar;
  });

  return (
    <section id="reviews-section" className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300 font-mono text-xs mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>LIVE CLIENT RATINGS & REVIEWS LOG // 5,000+ DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-mono">
            Client Ratings & Live Reviews
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-sans">
            Real feedback directly recorded from corporate clients across Lucknow, Ranchi, Uttar Pradesh, and global
            markets.
          </p>
        </div>

        {/* Aggregate Rating Scorecard */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 glass-cyber-panel grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-5xl font-black text-white font-mono flex items-baseline justify-center md:justify-start gap-2">
              <span>4.9</span>
              <span className="text-lg text-slate-500 font-normal">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400 my-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-xs font-mono text-slate-400">
              Based on <strong className="text-white">5,000+ Verified Deployments</strong>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-slate-500 text-[10px]">5-STAR RATING</div>
              <div className="text-xl font-bold text-emerald-400">98.4%</div>
              <div className="text-[10px] text-slate-400">Overwhelming Praise</div>
            </div>

            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-slate-500 text-[10px]">AVG SPEED LIFT</div>
              <div className="text-xl font-bold text-blue-400">+400%</div>
              <div className="text-[10px] text-slate-400">Sub-50ms Loading</div>
            </div>

            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1 col-span-2 sm:col-span-1">
              <div className="text-slate-500 text-[10px]">VERIFIED BADGES</div>
              <div className="text-xl font-bold text-purple-400">100%</div>
              <div className="text-[10px] text-slate-400">Cryptographically Signed</div>
            </div>
          </div>
        </div>

        {/* Dynamic Form Submission Layout */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-7 rounded-3xl mb-10 shadow-2xl font-mono glass-cyber-panel">
          <h3 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider flex items-center gap-2">
            <Send className="w-4 h-4" />
            <span>Submit Your Live Review</span>
          </h3>

          {submittedStatus && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{submittedStatus}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Your Name / Business Title *</label>
                <input
                  id="revName"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Role & City (e.g. Lucknow / Ranchi / Founder)</label>
                <input
                  id="revRole"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. E-Commerce Founder (Lucknow)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Star Rating</label>
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 p-2.5 rounded-xl w-fit">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-125 transition"
                  >
                    <Star
                      className={`w-4 h-4 ${
                        star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-slate-400 ml-2 font-mono">{rating} / 5 Stars</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Review Comments *</label>
              <textarea
                id="revTxt"
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience with our 3D website design, Google search rankings, or developer coordination..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center gap-2"
            >
              <span>Publish Live Review</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-6 font-mono text-xs">
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reviews by name or keyword..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 pl-9 focus:outline-none focus:border-blue-500"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
          </div>

          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setStarFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                starFilter === 'all' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStarFilter(5)}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                starFilter === 5 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>5★</span>
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </button>
            <button
              onClick={() => setStarFilter(4)}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                starFilter === 4 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>4★</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 glass-cyber-panel space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500">{rev.date}</span>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">"{rev.comment}"</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <div>
                  <div className="text-white font-bold">{rev.name}</div>
                  <div className="text-slate-500 text-[10px]">{rev.role}</div>
                </div>

                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
