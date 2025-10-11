import { Check, X, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComparisonFeature {
  name: string;
  gwc: boolean | string;
  competitor1: boolean | string;
  competitor2: boolean | string;
  highlight?: boolean;
}

interface CompetitorComparisonTableProps {
  title?: string;
  subtitle?: string;
  features: ComparisonFeature[];
  testIdPrefix?: string;
}

export function CompetitorComparisonTable({ 
  title = "Why Switch to GWC?",
  subtitle = "Compare our transparent service with traditional 3PL providers",
  features,
  testIdPrefix = "comparison"
}: CompetitorComparisonTableProps) {
  
  const renderValue = (value: boolean | string, isGWC: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`w-6 h-6 ${isGWC ? 'text-primary' : 'text-green-600'}`} />
      ) : (
        <X className="w-6 h-6 text-muted-foreground/40" />
      );
    }
    return <span className={isGWC ? 'font-semibold text-primary' : 'text-muted-foreground'}>{value}</span>;
  };

  return (
    <div className="w-full" data-testid={`${testIdPrefix}-container`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid={`${testIdPrefix}-title`}>
          {title}
        </h2>
        <p className="text-xl text-muted-foreground" data-testid={`${testIdPrefix}-subtitle`}>
          {subtitle}
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4">
                    <div className="flex flex-col items-center gap-2">
                      <Badge variant="default" className="bg-primary">GWC + Quivo</Badge>
                      <span className="text-xs text-muted-foreground">You're Here</span>
                    </div>
                  </th>
                  <th className="text-center p-4 text-muted-foreground">Traditional 3PL A</th>
                  <th className="text-center p-4 text-muted-foreground">Traditional 3PL B</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className={`border-b last:border-b-0 ${feature.highlight ? 'bg-primary/5' : 'hover:bg-muted/30'} transition-colors`}
                    data-testid={`${testIdPrefix}-row-${index}`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{feature.name}</span>
                        {feature.highlight && (
                          <Badge variant="outline" className="text-xs">Key Differentiator</Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <div className="flex justify-center items-center">
                        {renderValue(feature.gwc, true)}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center items-center">
                        {renderValue(feature.competitor1)}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center items-center">
                        {renderValue(feature.competitor2)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

