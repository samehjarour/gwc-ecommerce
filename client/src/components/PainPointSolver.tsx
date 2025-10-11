import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

interface PainPoint {
  problem: string;
  icon?: React.ReactNode;
  solution: string;
  benefit: string;
}

interface PainPointSolverProps {
  title?: string;
  subtitle?: string;
  painPoints: PainPoint[];
  testIdPrefix?: string;
}

export function PainPointSolver({
  title = "Stop Struggling with Your Current 3PL",
  subtitle = "We solve the problems that make you want to switch",
  painPoints,
  testIdPrefix = "pain-point"
}: PainPointSolverProps) {
  return (
    <div className="w-full" data-testid={`${testIdPrefix}-container`}>
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          Made for Frustrated E-commerce Businesses
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid={`${testIdPrefix}-title`}>
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid={`${testIdPrefix}-subtitle`}>
          {subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {painPoints.map((point, index) => (
          <Card 
            key={index} 
            className="hover-elevate overflow-hidden" 
            data-testid={`${testIdPrefix}-card-${index}`}
          >
            <CardContent className="p-6">
              {/* Problem Section */}
              <div className="mb-6 pb-6 border-b border-destructive/20 bg-destructive/5 -m-6 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <XCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-destructive">
                      The Problem
                    </h3>
                    <p className="text-muted-foreground">
                      {point.problem}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Transition */}
              <div className="flex justify-center -my-3">
                <div className="bg-primary text-primary-foreground rounded-full p-2">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Solution Section */}
              <div className="mt-6 pt-6 bg-primary/5 -m-6 p-6 mt-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      Our Solution
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {point.solution}
                    </p>
                    <div className="bg-background/80 rounded-lg p-3 border border-primary/20">
                      <p className="text-sm font-medium">
                        <span className="text-primary">Result:</span> {point.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

