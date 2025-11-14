import { Clock, Sparkles, TrendingUp } from "lucide-react";
import TradeWolfLogo from "../../../../assets/img/LogoBG.png";

export function ComingSoon() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-tertiary px-6 py-12 relative overflow-auto">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 size-96 bg-tertiary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-72 bg-background/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl"></div>
            <img
              src={TradeWolfLogo}
              alt="TradeWolf logo"
              className="size-45 md:size-53 relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-background to-primary/10 bg-clip-text text-transparent py-3">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-background max-w-2xl mx-auto font-medium drop-shadow-md">
            We're preparing something amazing for you!
          </p>
          <p className="text-base md:text-lg text-background/90 max-w-xl mx-auto leading-relaxed">
            TradeWolf is under development. Soon you'll have access to a
            complete trading analysis platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
          <div className="flex flex-col items-center gap-3 group transform transition-all duration-300 hover:scale-110">
            <div className="p-5 rounded-full bg-primary/20 backdrop-blur-sm text-background border-2 border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Clock className="size-8 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-sm text-background font-bold transition-colors duration-300">
              Coming Soon
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 group transform transition-all duration-300 hover:scale-110">
            <div className="p-5 rounded-full bg-primary/20 backdrop-blur-sm text-background border-2 border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Sparkles className="size-8 group-hover:animate-pulse transition-all duration-300" />
            </div>
            <span className="text-sm text-background font-bold transition-colors duration-300">
              Innovative
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 group cursor-pointer transform transition-all duration-300 hover:scale-110">
            <div className="p-5 rounded-full bg-primary/20 backdrop-blur-sm text-background border-2 border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <TrendingUp className="size-8 group-hover:translate-y-[-4px] transition-transform duration-300" />
            </div>
            <span className="text-sm text-background font-bold transition-colors duration-300">
              Trading
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
