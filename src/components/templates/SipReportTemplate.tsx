import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";

// Define the interface for props
interface SIPReportTemplateProps {
  calcType: string;
  monthlyInvestment: number;
  lumpSumAmount: number;
  rateOfReturn: number;
  years: number;
  inflationRate: number;
  investmentAmount: number;
  estimatedReturns: number;
  maturityValue: number;
}

// Styles for the report template
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#3e3e3e",
    textDecoration: "underline",
    letterSpacing: 1.2,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#4c4c4c",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    color: "#555",
  },
  highlightedValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a73e8", // Blue for emphasis
  },
  sectionFooter: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
  },
  sectionSubHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#2d3e50",
  },
  rowHighlight: {
    backgroundColor: "#e8f5fe",
    padding: 5,
    borderRadius: 5,
  },
  valueBold: {
    fontWeight: "bold",
    color: "#333",
  },
});

// Utility function to ensure clean formatting without locale issues
const formatCurrency = (amount: number) => {
  return amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const SIPReportTemplate: React.FC<SIPReportTemplateProps> = ({
  calcType,
  monthlyInvestment,
  lumpSumAmount,
  rateOfReturn,
  years,
  inflationRate,
  investmentAmount,
  estimatedReturns,
  maturityValue,
}) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Investment Report</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Investment Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Calculation Type:</Text>
          <Text style={styles.value}>
            {calcType === "sip" ? "SIP" : "Lump Sum"}
          </Text>
        </View>

        {calcType === "sip" && (
          <View style={styles.row}>
            <Text style={styles.label}>Monthly Investment:</Text>
            <Text style={styles.value}>
              {formatCurrency(monthlyInvestment)}
            </Text>
          </View>
        )}

        {calcType === "lumpsum" && (
          <View style={styles.row}>
            <Text style={styles.label}>Lump Sum Investment:</Text>
            <Text style={styles.value}>{formatCurrency(lumpSumAmount)}</Text>
          </View>
        )}

        <View style={styles.row}>
          <Text style={styles.label}>Rate of Return:</Text>
          <Text style={styles.value}>{rateOfReturn}%</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Investment Period:</Text>
          <Text style={styles.value}>{years} years</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Inflation Rate:</Text>
          <Text style={styles.value}>{inflationRate}%</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Investment Outcome</Text>
        <View style={styles.rowHighlight}>
          <Text style={styles.label}>Invested Amount:</Text>
          <Text style={styles.highlightedValue}>
            {formatCurrency(investmentAmount)}
          </Text>
        </View>
        <View style={styles.rowHighlight}>
          <Text style={styles.label}>Estimated Returns:</Text>
          <Text style={styles.highlightedValue}>
            {formatCurrency(estimatedReturns)}
          </Text>
        </View>
        <View style={styles.rowHighlight}>
          <Text style={styles.label}>Maturity Value:</Text>
          <Text style={styles.highlightedValue}>
            {formatCurrency(maturityValue)}
          </Text>
        </View>
      </View>

      <Text style={styles.sectionFooter}>
        Thank you for trusting us with your investment plan!
      </Text>
      <Text style={styles.sectionFooter}>Team Nebula</Text>
    </Page>
  </Document>
);

export default SIPReportTemplate;
