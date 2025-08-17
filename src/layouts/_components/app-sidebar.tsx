import { Card, CardContent, CardTitle} from "../../components/ui/card";

export const AppSidebar = () => {
  return (
    <Card className="sidebar">
      <CardContent>
        <CardTitle>
            <a href="/">Dashboard</a>
        </CardTitle>
      </CardContent>
    </Card>
  );
};
