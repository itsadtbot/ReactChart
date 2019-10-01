import React, { Component } from "react";
import { Grommet,Heading, Box, Chart, Stack, Text } from "grommet";
import { grommet } from "grommet/themes";

class ComplianceChart extends Component {
    render() {
        const chartProps = {
            size: { width: "medium", height: "small" },
            overflow: true,
        };
        const xAxis = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
        const yAxis = [0, 50, 100];
        return (
            <Grommet theme={grommet}>
                <Box align="left" pad="large">
                    <Heading level="2" margin="none" size="small">
                        Compliance Timeline- using Grommet
                    </Heading>
                    <br/>
                    <Stack guidingChild="last">
                        <Box fill justify="between">
                            {yAxis.map((y, index) => {
                                const first = index === 0;
                                const last = index === yAxis.length - 1 && !first;
                                let align;
                                if (first) {
                                    align = "start";
                                } else if (last) {
                                    align = "end";
                                } else {
                                    align = "center";
                                }
                                return (
                                    <Box key={y} direction="row" align={align}>
                                        <Box pad={{ horizontal: "small" }}>
                                            <Text>{y}</Text>
                                        </Box>
                                        <Box border="top" flex />
                                    </Box>
                                );
                            })}
                        </Box>
                        {/* <Chart
                            {...chartProps}
                            values={[
                                
                                { label: 'First', value: [0, 60] },
                                { label: 'Second', value: [1, 20] },
                                { label: 'Third', value: [2, 40] },
                                { label: 'Fourth', value: [3, 50] },
                                { label: 'Fifth', value: [4, 10] },
                                { label: 'Sixth', value: [5, 70] },
                                { label: 'Seventh', value: [6, 80] }
                            ]}
                            bounds={[[0, 6], [0, 100]]}
                            type="area"
                            color={{ color: "#D9FFF6", opacity: "strong" }}
                            thickness="hair"

                        /> */}
                        {/* }
              <Chart
                {...chartProps}
                type='bar'
                color={{ color: 'accent-2', opacity: 'medium' }}
                thickness='xsmall'
              />
              { */}
                        <Chart
                            {...chartProps}
                            values={[
                                { label: 'First', value: [0, 60] },
                                { label: 'Second', value: [1, 20] },
                                { label: 'Third', value: [2, 40] },
                                { label: 'Fourth', value: [3, 50] },
                                { label: 'Fifth', value: [4, 10] },
                                { label: 'Sixth', value: [5, 70] },
                                { label: 'Seventh', value: [6, 80] }
                            ]}
                            bounds={[[-1, 6], [0, 100]]}
                            type="line"
                            round="false"
                            color={{ color: "#01A982", opacity: "strong" }}
                            thickness="xsmall"
                        />
                        <Chart
                            {...chartProps}
                            values={[
                                { label: 'First', value: [0, 40] },
                                { label: 'Second', value: [1, 90] },
                                { label: 'Third', value: [2, 20] },
                                { label: 'Fourth', value: [3, 30] },
                                { label: 'Fifth', value: [4, 40] },
                                { label: 'Sixth', value: [5, 10] },
                                { label: 'Seventh', value: [6, 20] }
                            ]}
                            bounds={[[-1, 6], [0, 100]]}
                            type="line"
                            round="false"
                            color={{ color: "#FD9A69", opacity: "strong" }}
                            thickness="xsmall"
                        />
                        <Chart
                            {...chartProps}
                            values={[
                                { label: 'First', value: [0, 20] },
                                { label: 'Second', value: [1, 50] },
                                { label: 'Third', value: [2, 10] },
                                { label: 'Fourth', value: [3, 50] },
                                { label: 'Fifth', value: [4, 70] },
                                { label: 'Sixth', value: [5, 50] },
                                { label: 'Seventh', value: [6, 40] }
                            ]}
                            bounds={[[-1, 6], [0, 100]]}
                            type="line"
                            round="false"
                            color={{ color: "#2AD2C9", opacity: "strong" }}
                            thickness="xsmall"
                        />
                    </Stack>
                    <Box
                        direction="row"
                        justify="between"
                        width="medium"
                        margin={{ vertical: "small" }}
                    >
                        {xAxis.map(x => (
                            <Text key={x}>{x}</Text>
                        ))}
                    </Box>
                </Box>
            </Grommet>
        );
    }
}
export default ComplianceChart;