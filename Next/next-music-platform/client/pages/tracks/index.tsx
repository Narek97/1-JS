import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks } from "../../store/actions-creators/track";

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypeSelector((state) => state.track);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"}>
              <h1>Track list</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Download
              </Button>
            </Grid>
            <TrackList tracks={tracks} />
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const dispatch = store.dispatch as NextThunkDispatch;
      await dispatch(await fetchTracks());
    }
);
