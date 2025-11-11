import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BalanceCard() {
  return (
    <Card className="flex justify-center w-full min-h-50 lg:min-h-60 xl:min-h-30 bg-card shadow-lg">
      <CardHeader>
        <div className="xl:px-2 px-0">
          <CardTitle className="font-extrabold text-search-dropdown text-xl md:text-3xl mb-10">
            My balance
          </CardTitle>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 gap-5">
            <CardDescription className="font-extrabold text-3xl md:text-4xl text-blue-muted">
              $25,901.41
            </CardDescription>
            <CardContent className="p-2 text-sm text-background font-semibold bg-success rounded-lg">
              810%
            </CardContent>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
